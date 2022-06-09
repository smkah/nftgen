import directoryTree from 'directory-tree';
import { DirectoryTree, DirectoryTreeCallback } from 'directory-tree';

interface ExtendDirectoryTree extends DirectoryTree {
    parent?: string;
    order?: number;
}

export default function handler(req, res) {

    const { path, excludes } = JSON.parse(req.body)

    const eachFile: DirectoryTreeCallback = (item: ExtendDirectoryTree, path: string) => {
        const folders = path.split('/')
        item.parent = folders[folders.length - 2];
        item.order = item.parent == 'assessories' ? 0 : 1;
    };

    // const eachDirectory: DirectoryTreeCallback = (item: ExtendDirectoryTree, path: string) => {
    //     // item.isOpen = true
    // };

    const files: ExtendDirectoryTree = directoryTree(path, {
        extensions: /\.(jpeg|jpg|png)$/,
        normalizePath: true,
        exclude: excludes?.map(r => new RegExp(r)),
        attributes: ['type', 'extension']
    }, eachFile, null);

    return res.status(200).json({ msg: 'resposta', files: files })
}