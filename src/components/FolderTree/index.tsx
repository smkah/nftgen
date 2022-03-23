import { useRef, useState } from 'react'
import useArray from '../../hooks/useArray'

interface Props {
    files: {
        src: string;
        width: number;
        height: number;
    }
}

const FileTree: React.FC<Props> = ({ files }) => {

    const { array, set, push, remove, filter, update, clear } = useArray([])

    const handleChange = (e) => {

        const isOnArray = array.filter(el => el.name == e.target.id)

        if (isOnArray.length == 0) {
            push({ name: e.target.id, checked: e.target.checked })
        }
        if (isOnArray.length > 0) {
            remove(array.findIndex(i => i.name == e.target.id))
        }

    }

    const BuildTree = ({ name, path, children, checked, isOpen = false }) => {
        return (
            <>
                <div className="flex gap-2 items-center">
                    <input type="checkbox" id={name} checked={array[array.findIndex(i => i.name == name)]?.checked} onChange={handleChange} />
                    {isOpen ? <h1 className="font-semibold">{name}</h1> : <h1>{name}</h1>}
                </div>
                {children?.length > 0 && children.map((item: JSX.IntrinsicAttributes & { name: any; path: any; children: any; checked: any; isOpen?: boolean; }) => (
                    <div key={item.name} className="ml-8">
                        <BuildTree {...item} />
                    </div>
                ))}
            </>
        )
    }

    return (
        <>
            <BuildTree {...files} />
            {/* <div>
                <div>{array.join(", ")}</div>
                <button onClick={() => push(7)}>Add 7</button>
                <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
                <button onClick={() => remove(1)}>Remove Second Element</button>
                <button onClick={() => filter(n => n < 3)}>
                    Keep Numbers Less Than 4
                </button>
                <button onClick={() => set([1, 2])}>Set To 1, 2</button>
                <button onClick={clear}>Clear</button>
            </div> */}
            <pre>{JSON.stringify(array, null, 4)}</pre>
        </>
    )

}
export default FileTree