import Image from 'next/image'
import { useEffect, useState } from 'react'
import srcImage from '../../assets/images/sam.jpg'

function HomePage() {

    const [subject, setSubject] = useState({
        newWidth: srcImage.width, newHeight: srcImage.height
    })
    // const [widthImage, setWidthImage] = useState(srcImage.width)
    // const [heightImage, setHeightImage] = useState(srcImage.height)

    useEffect(async () => {
        await fetch('/api/image', {
            method: 'POST',
            body: JSON.stringify(subject)
        }).then(res => res.json())
    }, [subject])

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
            <h1>Change Image</h1>
            Width: <input type="number" min="0" max={subject.newWidth} step="1" value={subject.newWidth} onFocusOut={onHandleWidthChange}></input> <span>px</span><br />
            Height: <input type="number" min="0" max={subject.newHeight} step="1" value={subject.newHeight} onFocusOut={onHandleHeightChange}></input> <span>px</span><br />
            <pre>{JSON.stringify(subject, null, 2)}</pre>
            {/* <Image {...srcImage} /> */}
        </>
    )
}

export default HomePage