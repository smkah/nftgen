import { writeFile } from 'fs/promises'

const config = {
    path: 'public/assets'
}

export default async function handler(req, res) {

    const data = req.body

    await writeFile(`${config.path}/state.json`, data, { encoding: 'utf-8' });

    return res.status(200)
}