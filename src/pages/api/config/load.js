import { readFile } from 'fs'
const config = {
    path: 'public/assets'
}

export default function handler(req, res) {

    readFile(`${config.path}/state.json`, (data, err) => {
        if (err) throw err;
        let reponse = JSON.parse(data);
    });

    return res.status(200).json(response)
}