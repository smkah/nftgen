import Image from 'next/image'
import { useEffect, useState } from 'react'
import srcImage from '../../assets/images/sam.jpg'
import hat from '../../assets/masks/hat.png'

import { Rnd } from "react-rnd"

delete srcImage.blurDataURL
delete hat.blurDataURL

function HomePage() {

    const [subject, setSubject] = useState({
        newWidth: srcImage.width, newHeight: srcImage.height
    })
    const [elem, setElem] = useState({
        width: srcImage.width, height: srcImage.height, x: 10, y: 10
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
            {/* Width: <input type="number" min="0" max={subject.newWidth} step="1" value={subject.newWidth} onChange={onHandleWidthChange}></input> <span>px</span><br />
            Height: <input type="number" min="0" max={subject.newHeight} step="1" value={subject.newHeight} onChange={onHandleHeightChange}></input> <span>px</span><br />
            <pre>{JSON.stringify(subject, null, 2)}</pre>
            <div style={{ resize: 'horizontal', maxWidth: `${srcImage.width}px`, maxHeight: `${srcImage.height}px`, overflow: 'hidden', position: 'relative' }}>
                <img {...srcImage} style={{ maxWidth: '100%', height: 'auto' }} />

            </div> */}

            <pre>{JSON.stringify(elem, null, 2)}</pre>

            <Rnd
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "solid 1px #ddd",
                    background: "#f0f0f0"
                }}
                size={{ width: elem.width, height: elem.height }}
                position={{ x: elem.x, y: elem.y }}
                onDragStop={(e, d) => {
                    setElem({ ...elem, x: d.x, y: d.y })
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    console.log(e)
                    setElem({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    });
                }}
            >
                <img {...srcImage} style={{ maxWidth: '100%', height: 'auto' }} />
            </Rnd>
        </>
    )
}

export default HomePage
