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
        selected: false,
        draggable: false
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

    const handleClick = e => {
        setElem({ ...elem, selected: !elem.selected })
        // console.log(elem.selected)
    }

    return (
        <>
            <div
                onClick={handleClick}
                className=""
            >
                <Moveable
                    target={imgRef}
                    container={null}
                    origin={false}
                    edge={false}
                    draggable={true}
                    throttleDrag={0}
                    onDragStart={({ target, clientX, clientY }) => {
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
                    }}

                    keepRatio={true}

                    /* resizable*/
                    /* Only one of resizable, scalable, warpable can be used. */
                    resizable={false}
                    throttleResize={0}
                    onResizeStart={({ target, clientX, clientY }) => {
                    }}
                    onResize={({
                        target, width, height,
                        dist, delta, direction,
                        clientX, clientY,
                    }: OnResize) => {
                        setElem({ ...elem, width, height })
                        delta[0] && (target!.style.width = `${width}px`);
                        delta[1] && (target!.style.height = `${height}px`);
                    }}
                    onResizeEnd={({ target, isDrag, clientX, clientY }) => {
                    }}

                    /* scalable */
                    scalable={true}
                    throttleScale={0}
                    onScaleStart={({ target, clientX, clientY }) => {
                    }}
                    onScale={({
                        target, scale, dist, delta, transform,
                        clientX, clientY
                    }: OnScale) => {
                        // const position = transform.match(/(-?[0-9\.]+)/g)
                        // const x = Number(position[0])
                        // const y = Number(position[1])
                        const width = Number(target.width * scale[0])
                        const height = Number(target.height * scale[1])

                        setElem({ ...elem, width, height })
                        target!.style.transform = transform;
                    }}
                    onScaleEnd={({ target, isDrag, clientX, clientY }) => {
                    }}

                    /* rotatable */
                    rotatable={true}
                    throttleRotate={0}
                    onRotateStart={({ target, clientX, clientY }) => {
                    }}
                    onRotate={({
                        target,
                        delta, dist,
                        transform,
                        clientX, clientY,
                    }: OnRotate) => {
                        setElem({ ...elem, angle: dist })
                        target!.style.transform = transform;
                    }}
                    onRotateEnd={({ target, isDrag, clientX, clientY }) => {
                    }}

                    /* warpable */
                    warpable={false}
                    onWarpStart={({ target, clientX, clientY }) => {
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
                        target.style.transform = transform;
                        // this.matrix = multiply(this.matrix, delta);
                        // target.style.transform = `matrix3d(${this.matrix.join(",")})`;
                    }}
                    onWarpEnd={({ target, isDrag, clientX, clientY }) => {
                    }}

                    // Enabling pinchable lets you use events that
                    // can be used in draggable, resizable, scalable, and rotateable.
                    pinchable={false}
                    onPinchStart={({ target, clientX, clientY, datas }) => {
                        // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
                    }}
                    onPinch={({ target, clientX, clientY, datas }) => {
                        // pinch event occur before drag, rotate, scale, resize
                    }}
                    onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {
                        // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
                    }}
                />
                <img ref={imgRef} src={elem.src} />
                <pre>{JSON.stringify(elem, null, 2)}</pre>
            </div>
        </>
    )

}
export default Movel