import { useEffect, useState, useRef } from 'react'

import { useFiles } from '../context/FilesContext'

import FolderTree from '../components/FolderTree'
import srcImage from '../../assets/images/sam.jpg'
import hat from '../../assets/masks/hat.png'

import Movel from '../components/Movel/index'

function HomePage() {

    const [subject, setSubject] = useState({
        newWidth: srcImage.width, newHeight: srcImage.height
    })

    const { files, setFiles, array } = useFiles()

    // const [widthImage, setWidthImage] = useState(srcImage.width)
    // const [heightImage, setHeightImage] = useState(srcImage.height)

    useEffect(async () => {
        const data = await fetch('/api/files', {
            method: 'POST',
            body: JSON.stringify('assets')
        }).then(res => res.json())
        setFiles(data)

    }, [])

    const onTreeStateChange = (state, event) => console.log(state, event);

    function onHandleWidthChange(e) {
        const newWidth = e.target.value
        setSubject({ ...subject, newWidth })
        // setWidthImage(e.target.value)
    }
    function onHandleHeightChange(e) {
        const newHeight = e.target.value
        setSubject({ ...subject, newHeight })
        // setHeightImage(e.target.value)
    }

    // if (error) return <div>Failed to load</div>
    // if (!res) return <div>Loading...</div>

    return (
        <>
            <div className="flex flex-col justify-center items-center p-10 gap-10 min-h-screen">
                <h1 className="text-3xl font-bold text-cyan-600">Mix Images</h1>
                <div className="flex flex-1 w-full">
                    <div className="relative flex w-1/6" >
                    </div>
                    <div className="relative flex w-4/6">
                        <img className="absolute top-0 left-0 -z-10" src={srcImage.src} />
                        {array.length > 0 ? array.map(e => <Movel className="absolute top-0 left-0 z-0" key={e.name} img={e} />) : ''}
                    </div>
                    <div className="flex flex-col w-1/6">
                        <FolderTree files={files} />
                    </div>
                </div>
            </div>
            <pre>{array.length > 0 ? 'true' : 'false'}</pre>
        </>
    )
}

export default HomePage
