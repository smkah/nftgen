import Moveable, { OnDrag, OnResize, OnScale, OnRotate, MoveableManagerInterface, Renderer, } from 'react-moveable'
import Selecto from "react-selecto";
import { useState, useRef, useEffect } from 'react'

interface Props {
    img: {
        src: string;
        width: number;
        height: number;
    }
    drag: boolean;
}

const DimensionViewable = {
    name: "dimensionViewable",
    props: {},
    events: {},
    render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
        const rect = moveable.getRect();

        return <div key={"dimension-viewer"} className={"moveable-dimension"} style={{
            position: "absolute",
            left: `${rect.width / 2}px`,
            top: `${rect.height + 20}px`,
            background: "#4af",
            borderRadius: "5px",
            padding: "2px 4px",
            color: "white",
            fontSize: "13px",
            whiteSpace: "nowrap",
            fontWeight: "bold",
            willChange: "transform",
            transform: `translate(-50%, 0px)`,
        }}>
            {Math.round(rect.width)} x {Math.round(rect.height)}
        </div>;
    },
} as const;

const Movel: React.FC<Props> = ({ img }) => {

    const [elem, setElem] = useState({
        src: img.src.replace('public', ''),
        width: img?.width,
        height: img?.height,
        x: 0,
        y: 0,
        angle: 0,
        selected: false,
        draggable: false,
        resizeble: false,
        scalable: true
    })

    const imgRef = useRef(null)

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

    const targetRef = useRef<HTMLDivElement>(null);

    return (
        <div className="root">
            <div className="container">
                <div className="target" ref={targetRef} style={{
                    transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)",
                }}><img ref={imgRef} src={elem.src} /></div>
                <Moveable
                    target={targetRef}
                    draggable={true}
                    throttleDrag={1}
                    edgeDraggable={false}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    scalable={true}
                    keepRatio={true}
                    throttleScale={0}
                    renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
                    rotatable={true}
                    throttleRotate={0}
                    rotationPosition={"right"}
                    originDraggable={true}
                    originRelative={true}
                    onDragOrigin={e => {
                        e.target.style.transformOrigin = e.transformOrigin;
                    }}
                    onRender={e => {
                        e.target.style.transform = e.transform;
                    }}
                />
            </div>
        </div>
        // <>
        //     <div
        //         onClick={handleClick}
        //         className="elements"
        //     >
        //         <Moveable
        //             target={imgRef}
        //             ables={[DimensionViewable]}
        //             container={null}
        //             origin={false}
        //             edge={false}
        //             draggable={true}
        //             throttleDrag={0}
        //             onClick={(e) => {
        //                 if (e.isDouble) !e.moveable.props.target
        //                 console.log(e.moveable)
        //             }}
        //             props={{
        //                 dimensionViewable: true,
        //             }}
        //             onDragStart={({ target, clientX, clientY }) => { }}
        //             onDrag={({ target, beforeDelta, beforeDist, left, top, right, bottom, delta, dist, transform, clientX, clientY }: OnDrag) => {

        //                 const position = transform.match(/(-?[0-9\.]+)/g)
        //                 const x = Number(position[0])
        //                 const y = Number(position[1])

        //                 console.log(target)

        //                 setElem({ ...elem, x, y })
        //                 target!.style.transform = transform

        //             }}
        //             onDragEnd={({ target, isDrag, clientX, clientY }) => { }}

        //             keepRatio={true}

        //             /* resizable*/
        //             /* Only one of resizable, scalable, warpable can be used. */
        //             resizable={false}
        //             throttleResize={0}
        //             onResizeStart={({ target, clientX, clientY }) => { }}
        //             onResize={({ target, width, height, dist, delta, direction, clientX, clientY }: OnResize) => {
        //                 setElem({ ...elem, width, height })
        //                 delta[0] && (target!.style.width = `${width}px`);
        //                 delta[1] && (target!.style.height = `${height}px`);
        //             }}
        //             onResizeEnd={({ target, isDrag, clientX, clientY }) => { }}

        //             /* scalable */
        //             scalable={true}
        //             throttleScale={0}
        //             onScaleStart={({ target, clientX, clientY }) => { }}
        //             onScale={({ target, scale, dist, delta, transform, clientX, clientY, drag }: OnScale) => {

        //                 const x = drag.currentTarget.state.left
        //                 const y = drag.currentTarget.state.top
        //                 const width = Number(target.width * scale[0])
        //                 const height = Number(target.height * scale[1])

        //                 setElem({ ...elem, x, y, width, height })
        //                 target!.style.transform = transform;
        //             }}
        //             onScaleEnd={({ target, isDrag, clientX, clientY }) => { }}

        //             /* rotatable */
        //             rotatable={true}
        //             throttleRotate={0}
        //             onRotateStart={({ target, clientX, clientY }) => { }}
        //             onRotate={({ target, delta, dist, transform, clientX, clientY }: OnRotate) => {
        //                 setElem({ ...elem, angle: dist })
        //                 target!.style.transform = transform;
        //             }}
        //             onRotateEnd={({ target, isDrag, clientX, clientY }) => { }}

        //             /* warpable */
        //             warpable={false}
        //             onWarpStart={({ target, clientX, clientY }) => { }}
        //             onWarp={({ target, clientX, clientY, delta, dist, multiply, transform }) => {
        //                 target.style.transform = transform;
        //                 // this.matrix = multiply(this.matrix, delta);
        //                 // target.style.transform = `matrix3d(${this.matrix.join(",")})`;
        //             }}
        //             onWarpEnd={({ target, isDrag, clientX, clientY }) => { }}

        //             // Enabling pinchable lets you use events that
        //             // can be used in draggable, resizable, scalable, and rotateable.
        //             pinchable={false}
        //             onPinchStart={({ target, clientX, clientY, datas }) => {
        //                 // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
        //             }}
        //             onPinch={({ target, clientX, clientY, datas }) => {
        //                 // pinch event occur before drag, rotate, scale, resize
        //             }}
        //             onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {
        //                 // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
        //             }}
        //         />
        //         <img ref={imgRef} src={elem.src} style={{ transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)" }} />
        //         <pre>{JSON.stringify(elem, null, 2)}</pre>
        //     </div>
        // </>
    )

}
export default Movel