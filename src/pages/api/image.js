const Jimp = require('jimp')
const path = require('path')

export default async function handler(req, res) {
    let { width, height, x, y, angle } = JSON.parse(req.body)

    console.log(angle)


    let w = Number(x)
    let h = Number(y)
    let wth = Number(width)
    let hht = Number(height)

    const person = await Jimp.read('./assets/images/sam.jpg');
    const hat = await Jimp.read('./assets/masks/hat.png');

    hat.resize(wth, hht).rotate(-angle)


    person
        .composite(hat, w, h)
        .write('./assets/images/sam1.jpg');


    res.status(200).json({ name: 'John Doe' })
}