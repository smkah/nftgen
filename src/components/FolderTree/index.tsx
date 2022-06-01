import { FolderOpenIcon, FolderIcon } from '@heroicons/react/solid'
import { Fragment, useState } from 'react';
import { useFiles } from '../../context/FilesContext';

// interface Props {
//     files?: {
//         src: string;
//         width: number;
//         height: number;
//     }
// }

// interface BuildTreeProps {
//     name: string; path: string; children: string; checked: boolean; type: string; parent: string; order: string
// }

// const FileTree: React.FC<Props> = () => {
//     const { files, array, push, remove } = useFiles()

//     const handleChange = async (e) => {
//         // const path = e.target.attributes.getNamedItem('data-path').value
//         const [parent, path, order] = e.target.value.split(',')

//         const isOnArray = array.filter(el => el.name == e.target.id)
//         if (isOnArray.length == 0) {
//             push({ name: e.target.id, src: path, parent, order, checked: e.target.checked })
//         }
//         if (isOnArray.length > 0) {
//             remove(array.findIndex(i => i.name == e.target.id))
//         }
//     }
//     const handleClick = (e) => {
//         console.log(e.target)
//     }

//     const BuildTree = ({ name, path, children, checked, type, parent, order }) => {
//         return (
//             <>
//                 <div className="flex items-center" onClick={handleClick}>
//                     {type === 'directory' ?
//                         <div className="flex gap-2 items-center">
//                             <FolderOpenIcon className="h-5 w-5 text-cyan-600" />
//                             <h1 className="font-semibold">{name}</h1>
//                         </div>
//                         :
//                         <div className="flex gap-2 items-center">
//                             <input type="checkbox" id={name} checked={array[array.findIndex(i => i.name == name)]?.checked} onChange={handleChange} data-path={path} value={[parent, path, order]} />
//                             <h2>{name}</h2>
//                         </div>}
//                 </div>
//                 {children?.length > 0 && children.map((files: BuildTreeProps) => (
//                     <div key={files.name} className="ml-5">
//                         <BuildTree {...files} />
//                     </div>
//                 ))}
//             </>
//         )
//     }

//     return (
//         <>
//             <BuildTree {...files} />
//         </>
//     )

// }

const TreeItem = ({
    label,
    isSelected,
    children,
    item
}) => {
    const [isOpen, toggleItemOpen] = useState<boolean | null>(null)
    const [selected, setSelected] = useState(isSelected)
    const { files, array, push, remove } = useFiles()

    const handleChange = async (e) => {
        // const path = e.target.attributes.getNamedItem('data-path').value
        const [parent, path, order] = e.target.value.split(',')

        const isOnArray = array.filter(el => el.name == e.target.id)
        if (isOnArray.length == 0) {
            push({ name: e.target.id, src: path, parent, order, checked: e.target.checked })
        }
        if (isOnArray.length > 0) {
            remove(array.findIndex(i => i.name == e.target.id))
        }
    }

    return (
        <>
            <div className="flex gap-2 items-center">
                {children?.length > 0 && (
                    <div
                        className="h-5 w-5 text-cyan-600"
                        onClick={() => toggleItemOpen(!isOpen)}
                    >
                        {isOpen ? <FolderOpenIcon /> : <FolderIcon />}
                    </div>
                )}
                <div className="font-semibold">
                    {item.type !== 'directory' && (
                        <input
                            type="checkbox"
                            id={label}
                            checked={array[array.findIndex(i => i.name == label)]?.checked}
                            onChange={handleChange}
                            data-path={item.path}
                            value={[item.parent, item.path, item.order]} />
                    )}
                    {label}
                </div>
            </div>
            <div className="ml-8">{isOpen && children}</div>
        </>
    )
}

const RecursiveTree = () => {
    const { files, array, push, remove } = useFiles()

    const createTree = (item) => {
        return item && (
            <TreeItem
                // id={item.id}
                key={item.id}
                isSelected={item.selected}
                label={item.name}
                item={item}
            >
                {item.children && item.children.map((i) => {
                    return <Fragment key={i.id}>{createTree(i)}</Fragment>
                })}
            </TreeItem>
        )
    }

    return (
        <>
            {files && files.children.map((item, i) => (
                <div key={i}>{createTree(item)}</div>
            ))}
        </>
    )

}

export default RecursiveTree