import { access } from 'fs'
import { readFile } from 'fs/promises'

export default async function handler(req, res) {

    const filePath = `${process.env.PUBLIC_ASSETS_URL}/state.json`

    access(filePath, async (err) => {
        if (err) {
            return res.status(404).send({ err })
        } else {
            const response = await readFile(filePath, "utf-8")
            return res.status(200).send(response)
        }
    });
}