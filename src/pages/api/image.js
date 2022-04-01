const Jimp = require('jimp'),
    path = require('path')

export default async function handler(req, res) {

    const elements = JSON.parse(req.body)
    const subject = await Jimp.read('./public/assets/images/fundo.png');

    for await (let e of elements) {
        const imgSrc = await Jimp.read(e.src)
        imgSrc
            .resize(e.width, Jimp.AUTO)
            .rotate(rotation > 0 ? Math.floor(-e.rotation * 100) - 1 : 0)
        subject
            .composite(imgSrc, e.left, e.top,)
    }

    subject
        .quality(100)
        .write('./public/assets/images/image.png');

    res.status(200).json({})
}