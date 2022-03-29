import directoryTree from 'directory-tree';
import { DirectoryTree, DirectoryTreeCallback } from 'directory-tree';

import Jimp from 'jimp'

export default function handler(req, res) {

    const eachFile: DirectoryTreeCallback = (item: DirectoryTree, path: string) => {
        item.checked = false
    };
    const eachDirectory: DirectoryTreeCallback = (item: DirectoryTree, path: string) => {
        item.isOpen = true, item.checked = false
    };

    const files: DirectoryTree & { isOpen?: boolean } = directoryTree(JSON.parse(req.body), {
        extensions: /\.(jpeg|jpg|png)$/,
        normalizePath: true,
        exclude: /models/,
    }, eachFile, eachDirectory);

    return res.status(200).json(files)
} 