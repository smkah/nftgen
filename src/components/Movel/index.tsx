import Moveable, { OnDrag, OnResize, OnScale, OnRotate, } from 'react-moveable'
import { useState, useRef } from 'react'

interface Props {
    img: {
        src: string;
        width: number;
        height: number;
    }
    drag: boolean;
}

const Movel: React.FC<Props> = ({ img, drag = true }) => {

    const imgRef = useRef(null)

    const [elem, setElem] = useState({
        src: img.src.replace('public', ''),
        width: img?.width,
        height: img?.height,
        x: 10,
        y: 10,
        angle: 0,
    })

    const [isVisibleButton, setIsVisibleButton] = useState('block')

    const handleCreate = async () => {

        await fetch('/api/image', {
            method: 'POST',
            body: JSON.stringify(elem)
        }).then(res => res.json())

        console.log("Created")
        return
    }

    return (
        <>
            <div className="">
                <Moveable
                    target={imgRef}
                    // container={null}
                    origin={true}

                    /* Resize event edges */
                    edge={true}

                    /* draggable */
                    draggable={true}
                    throttleDrag={0}
                    onDragStart={({ target, clientX, clientY }) => {
                        setIsVisibleButton('none')
                        // console.log("onDragStart", target);
                    }}
                    onDrag={({
                        target,
                        beforeDelta, beforeDist,
                        left, top,
                        right, bottom,
                        delta, dist,
                        transform,
                        clientX, clientY,
                    }: OnDrag) => {
                        const position = transform.match(/(-?[0-9\.]+)/g)
                        const x = Number(position[0])
                        const y = Number(position[1])

                        setElem({ ...elem, x, y })
                        // target!.style.left = `${left}px`;
                        // target!.style.top = `${top}px`;
                        // console.log("onDrag translate", dist);
                        target!.style.transform = transform;
                    }}
                    onDragEnd={({ target, isDrag, clientX, clientY }) => {
                        setIsVisibleButton('block')
                        // console.log("onDragEnd", target, isDrag);
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
                    }: OnResize) => {
                        setElem({ ...elem, width, height })
                        console.log("onResize", target);
                        delta[0] && (target!.style.width = `${width}px`);
                        delta[1] && (target!.style.height = `${height}px`);
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
                    }: OnScale) => {
                        console.log("onScale scale", scale);
                        target!.style.transform = transform;
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
                    }: OnRotate) => {
                        setElem({ ...elem, angle: dist })
                        console.log("onRotate", dist);
                        target!.style.transform = transform;
                    }}
                    onRotateEnd={({ target, isDrag, clientX, clientY }) => {
                        console.log("onRotateEnd", target, isDrag);
                    }}

                    /* warpable */
                    /* Only one of resizable, scalable, warpable can be used. */
                    // this.matrix = [
                    //     1, 0, 0, 0,
                    //     0, 1, 0, 0,
                    //     0, 0, 1, 0,
                    //     0, 0, 0, 1,
                    // ]
                    // */
                    // warpable={true}
                    // onWarpStart={({ target, clientX, clientY }) => {
                    //     console.log("onWarpStart", target);
                    // }}
                    // onWarp={({
                    //     target,
                    //     clientX,
                    //     clientY,
                    //     delta,
                    //     dist,
                    //     multiply,
                    //     transform,
                    // }) => {
                    //     console.log("onWarp", target);
                    //     // target.style.transform = transform;
                    //     this.matrix = multiply(this.matrix, delta);
                    //     target.style.transform = `matrix3d(${this.matrix.join(",")})`;
                    // }}
                    // onWarpEnd={({ target, isDrag, clientX, clientY }) => {
                    //     console.log("onWarpEnd", target, isDrag);
                    // }}

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
                <>
                    <img ref={imgRef} src={elem.src} />
                    <button style={{ display: `${isVisibleButton}` }} className="bg-green-500 text-white px-2 py-1 rounded" onClick={handleCreate}>Save</button>
                </>
            </div>
        </>
    )

}
export default Movel