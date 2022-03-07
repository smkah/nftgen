import Jimp from 'jimp';
import debug from 'debug';

const log = debug('--> debug:');


(async function start() {

    log('inicio')
    for (let index = 0; index < 5; index++) {
        const config = {
            images: [
                { path: '', type: '' }
            ]
        }
        log('loop')
    }


})()

async function resize() {

    const imgSize = await Jimp.read({ url })
    const bg = await Jimp.read('./bg.jpg')

    const w = imgSize._exif.imageSize.width
    const h = imgSize._exif.imageSize.height

    const mw = (1000 - w) / 2
    const mh = (1000 - h) / 2
}

async function join() {
    bg
        .composite(imgSize, mw, mh)
        .write(`./${brand}/${category}/${sku}/${sku}_${imgNum < 10 ? imgNum.toString().padStart(2, "0") : imgNum}.jpg`)
}






