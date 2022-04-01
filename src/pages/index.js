import { useEffect, useRef } from 'react'
import { useFiles } from '../context/FilesContext'
import FolderTree from '../components/FolderTree'
import Movel from '../components/Movel/index'
import srcImage from '../../public/assets/images/fundo.png'

function HomePage() {

    const { files, setFiles, array } = useFiles()
    const captureRef = useRef(null)

    useEffect(async () => {
        const data = await fetch('/api/files', {
            method: 'POST',
            body: JSON.stringify('public/assets')
        }).then(res => res.json())
        setFiles(data)
    }, [])

    const handleCreate = async () => {
        const data = await fetch('/api/image', {
            method: 'POST',
            body: JSON.stringify(array)
        }).then(res => res.json())
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center p-10 gap-10 min-h-screen">
                <h1 className="text-3xl font-bold text-cyan-600">Mix Images</h1>
                <div className="flex flex-1 w-full">
                    <div className="relative flex w-1/6" >
                    </div>
                    <div ref={captureRef} className="relative flex w-4/6">
                        <img className="absolute top-0 left-0 -z-10" src={srcImage.src} />
                        {array.length > 0 ? array.map(e => <Movel className="absolute top-0 left-0 z-0" key={e.name} img={e} />) : ''}
                    </div>
                    <div className="flex flex-col w-1/6 gap-6">
                        <FolderTree files={files} />
                        <button className="bg-cyan-600 text-white font-semibold uppercase px-2 py-1 rounded"
                            onClick={handleCreate} >Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
