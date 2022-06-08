import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useFiles } from '../context/FilesContext'
import FolderTree from '../components/FolderTree'
import Movel from '../components/Movel/index'
import Snackbar from '../components/Snackbar'

function HomePage() {

    const { setFiles, array, clear, push } = useFiles()
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [zoomValue, setZoomValue] = useState(100)
    const captureRef = useRef(null)
    const [notify, setNotify] = useState({
        open: false,
        type: null,
        autoHideDuration: 3000,
        message: '',
        action: null
    })

    const handleSaveConfig = async (e) => {
        const data = await fetch('/api/config/save', {
            method: 'POST',
            body: JSON.stringify(array)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setNotify(prevState => {
                    return { ...prevState, open: true, type: 'success', message: 'Saved state' }
                });
            })


    }
    const handleLoadConfig = (e = null) => {
        fetch('api/config/load')
            .then((res) => res.json())
            .then((data) => {
                const arraySorted = data.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));
                clear()
                for (const item of arraySorted) {
                    push(item)
                }
                setNotify(prevState => {
                    return { ...prevState, open: true, type: 'success', message: 'Loaded state' }
                });
            })
            .catch(() => {
                setNotify(prevState => {
                    return { ...prevState, open: true, type: 'warning', message: 'Without state file!' }
                });
            });
    }


    useEffect(() => {

        fetch('api/files', {
            method: 'POST',
            body: JSON.stringify({
                path: 'public/assets',
                excludes: ['models', 'output']
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setFiles(data)
            })

        handleLoadConfig()
    }, [])

    const handleCreate = async () => {
        setIsLoading(true)
        const data = await fetch('/api/image', {
            method: 'POST',
            body: JSON.stringify(array)
        }).then(res => res.json())

        const { children } = await fetch('/api/files', {
            method: 'POST',
            body: JSON.stringify({
                path: 'public/assets/output',
                excludes: ['models']
            })
        }).then(res => res.json())

        setResults(children)
        setIsLoading(false)
    }

    const handleZoomChange = (e) => {
        setZoomValue(e.target.value)
        captureRef.current.style.zoom = `${zoomValue}%`
    }

    return (
        <>
            <div className="flex flex-col justify-center items-start p-10 gap-10 h-[1200px]">
                <div className="text-3xl font-bold text-cyan-600">MIX IMAGES</div>
                <div className="flex flex-1 w-full">

                    <div ref={captureRef} className="relative w-5/6">
                        <div className="absolute top-0 left-0 -z-10 border-dotted border-2 border-cyan-200 bg-cyan-50 w-[1000px] h-[1000px]"></div>
                        {/* <img className="absolute top-0 left-0 -z-10 object-contain" src={srcImage.src} /> */}
                        {array.length > 0 ? array.map(e => <Movel key={e.name} img={e} />) : <div className="p-5">Select Images...</div>}
                    </div>

                    <div className="flex flex-col w-1/6 gap-5">
                        <h4 className="text-cyan-600 uppercase font-semibold">Folders list</h4>
                        <FolderTree />
                        {/* <div className="flex flex-col">
                            <label htmlFor="zoom">Zoom: {zoomValue}%</label>
                            <input type="range" id="zoom" name="zoom" min="0" max="250" value={zoomValue} onChange={handleZoomChange} />
                        </div> */}
                        <div className="bg-green-200 border-2 border-green-400 text-green-600 p-2 rounded">
                            <h6>State:</h6>
                            <div className="flex gap-1">
                                <button className="bg-green-400 text-white font-semibold px-2 py-1 rounded w-1/2"
                                    onClick={handleSaveConfig}>Save</button>
                                <button className="bg-green-400 text-white font-semibold px-2 py-1 rounded w-1/2"
                                    onClick={handleLoadConfig}>Load...</button>
                            </div>
                        </div>
                        <button className="bg-green-600 text-white font-semibold uppercase px-2 py-1 rounded"
                            onClick={handleCreate}>{isLoading ? 'Creating...' : 'Create'}</button>

                        <div className="flex flex-col items-center">
                            <div className="flex gap-1">
                                {results.length > 0 ?
                                    results.map((e, k) => <div key={k} className="border-2 border-solid object-contain"><Image src={e.path.replace('public', '')} width="100" height="100" alt={e.name} /></div>)
                                    :
                                    <h4 className="bg-red-600 text-gray-50 px-2 py-1 rounded">No results</h4>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <pre>{JSON.stringify(process.env, null, 2)}</pre>
            </div>
            <div className="flex text-3l font-thin text-cyan-600 justify-end p-5">Created by @smkah</div>
            <Snackbar notify={notify} onNotify={setNotify}></Snackbar>
        </>
    )
}

export default HomePage;

import { existsSync } from 'fs'
import { readFile } from 'fs/promises'


// export async function getStaticProps() {

//     let config = {
//         path: 'public/assets',
//         state: null
//     }

//     const filePath = `${config.path}/state.json`;


//     if (existsSync(filePath)) {
//         config.state = await readFile(filePath, "utf-8")
//         config.state = JSON.parse(config.state)
//     }

//     return {
//         props: { state: config.state }
//     }

// }
