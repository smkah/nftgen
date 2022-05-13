import { writeFile } from 'fs'
const config = {
    path: 'public/assets'
}

export default function handler(req, res) {

    const data = req.body

    writeFile(`${config.path}/state.json`, data, (err) => {
        if (err) throw err;
    });

    return res.status(200)
}