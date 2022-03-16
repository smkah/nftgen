const Jimp = require('jimp')
const path = require('path')

export default async function handler(req, res) {
    let { newWidth, newHeight } = JSON.parse(req.body)

    let w = Number(newWidth)
    let h = Number(newHeight)

    const person = await Jimp.read('./assets/images/sam.jpg');
    person
        .resize(w, h)
        .write('./assets/images/sam1.jpg');


    res.status(200).json({ name: 'John Doe' })
}