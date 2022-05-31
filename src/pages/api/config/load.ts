import { existsSync } from 'fs'
import { readFile } from 'fs/promises'

const config = {
    path: 'public/assets'
}

export default async function handler(req, res) {

    const filePath = `${config.path}/state.json`

    if (existsSync(filePath)) {
        const response = await readFile(filePath, "utf-8")
        return res.status(200).json(JSON.parse(response))
    }
    return res.status(200)
}