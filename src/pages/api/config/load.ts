import { access } from 'fs'
import { readFile } from 'fs/promises'

const config = {
    path: 'public/assets'
}

export default async function handler(req, res) {

    const filePath = `${config.path}/state.json`

    console.log(filePath)

    access(filePath, async (err) => {
        if (err) {
            return res.status(404).send({ message: 'Not found state file.' })
        } else {
            const response = await readFile(filePath, "utf-8")
            return res.status(200).send(response)
        }
    });
}