import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useFiles } from '../context/FilesContext'
import FolderTree from '../components/FolderTree'
import Movel from '../components/Movel/index'

function HomePage() {

    const { setFiles, array, clear, push } = useFiles()
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
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

            const loadData = await fetch('/api/config/load', {
                method: 'GET'
            }).then(res => res.json())

            const arraySorted = loadData.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));

            clear()
            for await (const item of arraySorted) {
                push(item)
            }
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
                                    results.map((e, k) => <div className="border-2 border-solid object-contain"><Image key={k} src={e.path.replace('public', '')} width="100" height="100" alt={e.name} /></div>)
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
        </>
    )
}

export default HomePage
