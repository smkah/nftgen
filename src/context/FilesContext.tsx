import React, { useContext, useState, createContext } from "react"
import useArray from '../hooks/useArray'

const FilesContext = createContext(null)

export default function FilesProvider({ children }) {
    const [files, setFiles] = useState()
    const { array, set, push, remove, filter, update, clear } = useArray([])

    return (
        <FilesContext.Provider value={{ files, setFiles, array, set, push, remove, filter, update, clear }}>
            {children}
        </FilesContext.Provider>
    )
}

export function useFiles() {
    const context = useContext(FilesContext);
    const { files, setFiles, array, set, push, remove, filter, update, clear } = context;
    return { files, setFiles, array, set, push, remove, filter, update, clear }
}