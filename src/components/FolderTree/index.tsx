import { useRef, useState } from 'react'
import useArray from '../../hooks/useArray'
import { PhotographIcon, FolderOpenIcon } from '@heroicons/react/solid'

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
                    {isOpen ? <div className="flex gap-2 items-center">
                        <FolderOpenIcon className="h-5 w-5 text-blue-500" />
                        <h1 className="font-semibold"> {name}</h1>
                    </div>
                        :
                        <h2>{name}</h2>
                    }
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
        <BuildTree {...files} />
    )

}
export default FileTree