const Jimp = require('jimp'),
    path = require('path')

export default async function handler(req, res) {

    const elements = JSON.parse(req.body)
    const subject = await Jimp.read('./public/assets/images/sam.jpg');

    for await (let el of elements) {
        let { src, left, top, width, height, rotation } = el
        const imgSrc = await Jimp.read(src)
        width = width || imgSrc.bitmap.width
        height = height || imgSrc.bitmap.height
        left = left || 0
        top = top || 0

        imgSrc
            .rotate(-rotation)
            .resize(width, Jimp.AUTO, Jimp.HORIZONTAL_ALIGN_CENTER)
        subject
            .composite(imgSrc, left, top)
            .posterize(2)
        // .greyscale()
        // .invert()
    }

    subject
        .quality(100)
        .write('./public/assets/images/image.png');

    res.status(200).json({})
}