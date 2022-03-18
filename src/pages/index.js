import { useEffect, useState, useRef } from 'react'
import srcImage from '../../assets/images/sam.jpg'
import hat from '../../assets/masks/hat.png'

import Movel from '../components/Movel/index'

function HomePage() {

    const [subject, setSubject] = useState({
        newWidth: srcImage.width, newHeight: srcImage.height
    })

    // const [widthImage, setWidthImage] = useState(srcImage.width)
    // const [heightImage, setHeightImage] = useState(srcImage.height)

    // useEffect(async () => {
    //     await fetch('/api/image', {
    //         method: 'POST',
    //         body: JSON.stringify(subject)
    //     }).then(res => res.json())
    // }, [subject])

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
            <div className="flex flex-col justify-center items-center p-10 gap-10">
                <h1 className="text-3xl font-bold text-cyan-600">Mix Images</h1>
                <div className="relative flex w-full" >
                    <img className="absolute top-0 left-0 -z-10" src={srcImage.src} />
                    <Movel className="absolute top-0 left-0 z-0" img={hat} />
                </div>

            </div>
        </>
    )
}

export default HomePage
