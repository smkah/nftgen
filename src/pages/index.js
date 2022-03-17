import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import srcImage from '../../assets/images/sam.jpg'
import hat from '../../assets/masks/hat.png'

import Moveable from "react-moveable"

delete srcImage.blurDataURL
delete hat.blurDataURL

function HomePage() {

    const img = useRef(null);

    const [subject, setSubject] = useState({
        newWidth: srcImage.width, newHeight: srcImage.height
    })
    const [elem, setElem] = useState({
        width: srcImage.width, height: srcImage.height, x: 10, y: 10, angle: 0
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

    function getCurrentAngle(el) {
        var st = window.getComputedStyle(el, null);
        var tm = st.getPropertyValue("-webkit-transform") ||
            st.getPropertyValue("-moz-transform") ||
            st.getPropertyValue("-ms-transform") ||
            st.getPropertyValue("-o-transform") ||
            st.getPropertyValue("transform") ||
            "none";
        if (tm != "none") {
            var values = tm.split('(')[1].split(')')[0].split(',');
            /*
            a = values[0];
            b = values[1];
            angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
            */
            //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
            var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
            return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
        }
        return 0;
    }

    function setCurrentAngle(angle) {


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
            {/* Rotate: <input type="number" value={elem.angle} onChange={onHandleHeightChange}></input> <span>deg</span><br /> */}

            {/* <Rnd
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "solid 1px #ddd",
                    backgroundImage: `url(${srcImage.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    // backgroundColor: "lightblue",
                    // backgroundAttachment: "fixed",
                    // backgroundPosition: "center",
                }}
                size={{
                    width: elem.width,
                    height: elem.height
                }}
                position={{ x: elem.x, y: elem.y }}
                onDragStop={(e, d) => {
                    e.target.style['transform'] = "rotate(20deg)"
                    setElem({ ...elem, x: d.x, y: d.y })
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    console.log(e.target.style)
                    setElem({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    });
                }}
            /> */}

            <Moveable
                target={img}
                container={null}
                origin={true}

                /* Resize event edges */
                edge={true}

                /* draggable */
                draggable={true}
                throttleDrag={0}
                onDragStart={({ target, clientX, clientY }) => {
                    console.log("onDragStart", target);
                }}
                onDrag={({
                    target,
                    beforeDelta, beforeDist,
                    left, top,
                    right, bottom,
                    delta, dist,
                    transform,
                    clientX, clientY,
                }) => {
                    console.log("onDrag left, top", left, top);
                    // target!.style.left = `${left}px`;
                    // target!.style.top = `${top}px`;
                    console.log("onDrag translate", dist);
                    target.style.transform = transform;
                }}
                onDragEnd={({ target, isDrag, clientX, clientY }) => {
                    console.log("onDragEnd", target, isDrag);
                }}

                /* When resize or scale, keeps a ratio of the width, height. */
                keepRatio={true}

                /* resizable*/
                /* Only one of resizable, scalable, warpable can be used. */
                resizable={true}
                throttleResize={0}
                onResizeStart={({ target, clientX, clientY }) => {
                    console.log("onResizeStart", target);
                }}
                onResize={({
                    target, width, height,
                    dist, delta, direction,
                    clientX, clientY,
                }) => {
                    console.log("onResize", target);
                    delta[0] && (target.style.width = `${width}px`);
                    delta[1] && (target.style.height = `${height}px`);
                }}
                onResizeEnd={({ target, isDrag, clientX, clientY }) => {
                    console.log("onResizeEnd", target, isDrag);
                }}

                /* scalable */
                /* Only one of resizable, scalable, warpable can be used. */
                scalable={true}
                throttleScale={0}
                onScaleStart={({ target, clientX, clientY }) => {
                    console.log("onScaleStart", target);
                }}
                onScale={({
                    target, scale, dist, delta, transform,
                    clientX, clientY,
                }) => {
                    console.log("onScale scale", scale);
                    target.style.transform = transform;
                }}
                onScaleEnd={({ target, isDrag, clientX, clientY }) => {
                    console.log("onScaleEnd", target, isDrag);
                }}

                /* rotatable */
                rotatable={true}
                throttleRotate={0}
                onRotateStart={({ target, clientX, clientY }) => {
                    console.log("onRotateStart", target);
                }}
                onRotate={({
                    target,
                    delta, dist,
                    transform,
                    clientX, clientY,
                }) => {
                    console.log("onRotate", dist);
                    target.style.transform = transform;
                }}
                onRotateEnd={({ target, isDrag, clientX, clientY }) => {
                    console.log("onRotateEnd", target, isDrag);
                }}

                /* warpable */
                /* Only one of resizable, scalable, warpable can be used. */
                /*
                this.matrix = [
                    1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1,
                ]
                */
                warpable={true}
                onWarpStart={({ target, clientX, clientY }) => {
                    console.log("onWarpStart", target);
                }}
                onWarp={({
                    target,
                    clientX,
                    clientY,
                    delta,
                    dist,
                    multiply,
                    transform,
                }) => {
                    console.log("onWarp", target);
                    // target.style.transform = transform;
                    this.matrix = multiply(this.matrix, delta);
                    target.style.transform = `matrix3d(${this.matrix.join(",")})`;
                }}
                onWarpEnd={({ target, isDrag, clientX, clientY }) => {
                    console.log("onWarpEnd", target, isDrag);
                }}

                // Enabling pinchable lets you use events that
                // can be used in draggable, resizable, scalable, and rotateable.
                pinchable={true}
                onPinchStart={({ target, clientX, clientY, datas }) => {
                    // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
                    console.log("onPinchStart");
                }}
                onPinch={({ target, clientX, clientY, datas }) => {
                    // pinch event occur before drag, rotate, scale, resize
                    console.log("onPinch");
                }}
                onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {
                    // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
                    console.log("onPinchEnd");
                }}
            />
            <img ref={img} src={srcImage.src} />
        </>
    )
}

export default HomePage
