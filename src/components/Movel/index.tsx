import Moveable, { OnDrag, OnResize, OnScale, OnRotate, MoveableManagerInterface, Renderer, } from 'react-moveable'
import Selecto from "react-selecto";
import { useState, useRef, useEffect } from 'react'
import { useFiles } from '../../context/FilesContext';

interface Props {
    img: {
        name: string;
        src: string;
        width: number;
        height: number;
    }
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

    const { array, update } = useFiles()
    const targetRef = useRef<HTMLDivElement>(null);

    return (
        <div className="root">
            <div className="container">
                {/* <div className="target" ref={targetRef} style={{ transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)" }}>
                </div> */}
                <img id={img.name} className="target" ref={targetRef} style={{ transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)" }} src={img.src.replace('public', '')} />
                <Moveable
                    target={targetRef}
                    ables={[DimensionViewable]}
                    props={{
                        dimensionViewable: false,
                    }}
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
                    // onDrag={({ translate: [left, top] }) => {
                    //     update(array.findIndex(a => a.name === img.name), { ...img, left, top })
                    // }}
                    // onScale={({ scale: [x, y], offsetHeight, offsetWidth }) => {
                    //     update(array.findIndex(a => a.name === img.name), { ...img, width: offsetWidth * x, height: offsetHeight * y })
                    // }}
                    onRender={e => {
                        let { left, top, width, height, rotation } = e.moveable.getRect()
                        update(array.findIndex(a => a.name === img.name), { ...img, left, top, width, height, rotation })
                        e.target.style.transform = e.transform;
                    }}
                />
            </div>
        </div>
    )

}
export default Movel