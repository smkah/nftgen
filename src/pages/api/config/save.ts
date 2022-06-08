import { writeFile } from 'fs/promises'

export default async function handler(req, res) {

    const data = req.body
    const filePath = `${process.env.PUBLIC_ASSETS_URL}/state.json`

    await writeFile(filePath, data, { encoding: 'utf-8' });

    return res.status(200)
}