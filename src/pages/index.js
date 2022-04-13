import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useFiles } from '../context/FilesContext'
import FolderTree from '../components/FolderTree'
import Movel from '../components/Movel/index'
import srcImage from '../../public/assets/images/sam.jpg'

function HomePage() {

    const { setFiles, array } = useFiles()
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const captureRef = useRef(null)

    useEffect(async () => {
        const data = await fetch('/api/files', {
            method: 'POST',
            body: JSON.stringify({
                path: 'public/assets',
                excludes: ['models', 'output']
            })
        }).then(res => res.json())
        setFiles(data)
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

    return (
        <>
            <div className="flex flex-col justify-center items-center p-10 gap-10 min-h-screen">
                <h1 className="text-3xl font-bold text-cyan-600">Mix Images</h1>
                <div className="flex flex-1 w-full">
                    <div className="relative flex w-1/6" >
                    </div>
                    <div ref={captureRef} className="relative w-3/6">
                        <img className="absolute top-0 left-0 -z-10" src={srcImage.src} />
                        {array.length > 0 ? array.map(e => <Movel className="" key={e.name} img={e} />) : ''}
                    </div>
                    <div className="flex flex-col w-2/6 gap-5">
                        <h3 className="text-cyan-600 uppercase font-semibold mb-5">Folders list</h3>
                        <FolderTree />
                        <button className="bg-cyan-600 text-white font-semibold uppercase px-2 py-1 w-1/3 rounded"
                            onClick={handleCreate} >Create</button>
                        {isLoading && <div className="text-cyan-600 font-semibold mb-5">Creating...</div>}
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-cyan-600 uppercase font-semibold mb-5">Generated files</h3>
                    <div className="flex gap-5">
                        {results.length > 0 ?
                            results.map((e, k) => <Image key={k} src={e.path.replace('public', '')} width="100" height="100" alt={e.name} />)
                            :
                            <h4 className="bg-red-600 text-gray-50  px-2 py-1 rounded">No results</h4>
                        }
                    </div>
                </div>
                {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
            </div>
        </>
    )
}

export default HomePage
