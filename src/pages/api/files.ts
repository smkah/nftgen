import directoryTree from 'directory-tree';
import { DirectoryTree, DirectoryTreeCallback } from 'directory-tree';
import { stdout } from 'process';

interface ExtendDirectoryTree extends DirectoryTree {
    parent?: string;
    order?: number;
}

export default function handler(req, res) {

    try {

        const { path, excludes } = JSON.parse(req.body)
        console.log(path, excludes)

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
        console.log('loading files')
        return res.status(200).json({ msg: 'ok', files: files })
    } catch (error) {
        console.log(error)
        return res.send(error)
    }


}