import { join } from 'path';
import { readdirSync, statSync } from 'fs';

import directoryTree from 'directory-tree';
import { DirectoryTree, DirectoryTreeCallback } from 'directory-tree';
import path from 'node:path/win32';

export default function handler(req, res) {

    const eachFile: DirectoryTreeCallback = (item: DirectoryTree, path: string) => {
        item.checked = false
    };
    const eachDirectory: DirectoryTreeCallback = (item: DirectoryTree, path: string) => {
        item.isOpen = true, item.checked = false
    };

    const files: DirectoryTree & { isOpen?: boolean } = directoryTree(JSON.parse(req.body), {
        extensions: /\.(jpeg|jpg|png)$/,
        exclude: /models/,
        normalizePath: true
        // attributes: ['mode', 'mtime']
    }, eachFile, eachDirectory);

    return res.status(200).json(files)
} 