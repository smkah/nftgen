import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useFiles } from '../context/FilesContext'
import FolderTree from '../components/FolderTree'
import Movel from '../components/Movel/index'

function HomePage({ state }) {

    const { setFiles, array, clear, push } = useFiles()
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [notify, setNotify] = useState({
        isOpen: false,
        msg: ''
    })
    const captureRef = useRef(null)
    const [zoomValue, setZoomValue] = useState(100)

    useEffect(() => {

        (async () => {
            const files = await fetch('/api/files', {
                method: 'POST',
                body: JSON.stringify({
                    path: 'public/assets',
                    excludes: ['models', 'output']
                })
            }).then(res => res.json())
            setFiles(files)

            // const loadData = await fetch('/api/config/load', {
            //     method: 'GET'
            // }).then(res => res.json())

            const arraySorted = state.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));

            clear()
            for await (const item of arraySorted) {
                push(item)
            }

            setNotify({ ...notify, isOpen: true, msg: 'Estado carregado com sucesso!' })

            setTimeout(function () {
                setNotify({ ...notify, isOpen: false })
            }, 3000);

        })();

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

    const handleSaveConfig = async (e) => {
        const data = await fetch('/api/config/save', {
            method: 'POST',
            body: JSON.stringify(array)
        }).then(res => res.json())
    }
    const handleLoadConfig = async (e) => {
        const data = await fetch('/api/config/load', {
            method: 'GET'
        }).then(res => res.json())
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
                {/* <pre>{JSON.stringify(array, null, 2)}</pre> */}
            </div>
            <div className="flex text-3l font-thin text-cyan-600 justify-end p-5">Created by @smkah</div>

            {notify.isOpen && (
                <div className="absolute m-3 w-fit top-0 right-0 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                    <div className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">OK!</strong>
                        <span className="ml-2 block sm:inline">{notify.msg}</span>
                        <span className="">
                            <svg className="fill-current h-6 w-6 text-green-600" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}

export default HomePage;

import { existsSync } from 'fs'
import { readFile } from 'fs/promises'


export async function getStaticProps() {

    let config = {
        path: 'public/assets',
        state: null
    }

    const filePath = `${config.path}/state.json`;


    if (existsSync(filePath)) {
        config.state = await readFile(filePath, "utf-8")
        config.state = JSON.parse(config.state)
    }

    return {
        props: { state: config.state }
    }

}
