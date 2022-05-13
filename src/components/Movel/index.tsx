import Moveable, { OnDrag, OnResize, OnScale, OnRotate, MoveableManagerInterface, Renderer } from 'react-moveable'
// import MoveableHelper from "moveable-helper";
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

const changeOrderElement = (array, update, img, target, direction) => {
    const indexImage = array.findIndex(a => a.name === img.name)
    let order = +array[indexImage].order
    if (direction === 'up') {
        order += 1;
    } else {
        order -= 1;
    }
    update(indexImage, { ...img, order })
    target.style.zIndex = String(order)
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

const Editable = {
    name: "editable",
    props: {},
    events: {},
    render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
        const rect = moveable.getRect();
        const { pos2 } = moveable.state;
        const { array, update, img, target } = moveable.props

        const EditableViewer = moveable.useCSS("div",
            `{
                position: absolute;
                left: ${rect.width}px;
                top: 0px;
                will-change: transform;
                transform-origin: 0px 0px;
            }`
        );

        return <EditableViewer key="editable-viewer" className={"moveable-editable"} style={{
            transform: `translate(${pos2[0]}px, (${pos2[1]}px) rotate((${rect.rotation}deg) translate(10px)`,
        }}>
            <div className="flex flex-col gap-1">
                <button className="flex justify-center bg-cyan-600 text-white w-6 h-6 rounded" onClick={() => {
                    const direction = 'down'
                    changeOrderElement(array, update, img, target, direction)
                }}>-</button>
                <button className="flex justify-center bg-cyan-600 text-white w-6 h-6 rounded" onClick={() => {
                    const direction = 'up'
                    changeOrderElement(array, update, img, target, direction)
                }}>+</button>
                <div className="flex justify-center items-center border-solid border-2 border-cyan-600 bg-cyan-200 text-cyan-600 w-6 h-6 rounded">
                    {array[array.findIndex(a => a.name === img.name)].order}
                </div>
            </div>
        </EditableViewer>;
    }
} as const;

const Movel: React.FC<Props> = ({ img }) => {

    const { array, update } = useFiles()
    const targetRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <img id={img.name} ref={targetRef as any} className="absolute top-0 left-0" style={{ transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)" }} src={img.src.replace('public', '')} />
            <Moveable
                target={targetRef}
                ables={[DimensionViewable, Editable]}
                props={{ dimensionViewable: true, editable: true, array: array, update, img }}
                rootContainer={document.body}
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
                isDisplaySnapDigit={true}
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
        </>
    )

}
export default Movel