const Jimp = require('jimp')
const debug = require('debug')

const canvas = require('canvas')
const faceapi = require('face-api.js')

const path = require('path')
const fs = require('fs')

const { Canvas, Image, ImageData, loadImage, createCanvas } = canvas
faceapi.env.monkeyPatch({ Canvas, Image, ImageData })

const log = debug('|> debug:');

const loadModels = async () => {
    if (faceapi.nets.ssdMobilenetv1.isLoaded && faceapi.nets.faceLandmark68Net.isLoaded) {
        return;
    }
    const modelsPath = path.join(__dirname, 'assets/models');
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(modelsPath);
    await faceapi.nets.faceLandmark68Net.loadFromDisk(modelsPath);
}

const getOverlayValues = landmarks => {
    // const nose = landmarks.getNose()
    const jawline = landmarks.getJawOutline()

    const jawLeft = jawline[0]
    const jawRight = jawline.splice(-1)[0]
    const adjacent = jawRight.x - jawLeft.x
    const opposite = jawRight.y - jawLeft.y
    const jawLength = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2))

    // // const angle = Math.round(Math.tan(opposite / adjacent) * 100)
    // const angle = Math.atan2(opposite, adjacent) * (180 / Math.PI)
    // const width = jawLength * 2.2

    const leftEye = landmarks.getLeftEye()[0];
    const rightEye = landmarks.getRightEye()[4];
    const nose = landmarks.getNose()[0];

    const width = Math.sqrt(
        Math.pow(leftEye.x - rightEye.x, 2) +
        Math.pow(leftEye.y - rightEye.y, 2)
    );

    const ab = rightEye.y - leftEye.y;
    const ac = rightEye.x - leftEye.x;

    const tanACB = ab / ac;
    const deg = Math.atan(tanACB) * 180 / Math.PI;

    const angle = (-ab * 1 / ab) * deg;

    return {
        width,
        angle,
        nose,
        jawLength
    }
}

const makeNFT = async (imageBuffer) => {

    const image = await canvas.loadImage(imageBuffer);
    const face = await faceapi
        .detectSingleFace(image, new faceapi.SsdMobilenetv1Options({ minConfidence: 0.2 }))
        .withFaceLandmarks();

    log('Detect')

    const source = await Jimp.read(imageBuffer);
    const overlay = await Jimp.read(path.join(__dirname, 'assets/masks/hat.png'));

    const { width, angle, nose, jawLength } = getOverlayValues(face.landmarks)

    const editedOverlay = overlay.clone()
        .resize(jawLength + jawLength / 3, Jimp.AUTO)
        .rotate(angle);

    source.composite(
        editedOverlay,
        nose.x - editedOverlay.getWidth(),
        nose.y - editedOverlay.getHeight()
    );
    // source.composite(
    //     editedOverlay,
    //     nose.x - editedOverlay.getWidth() / 2,
    //     nose.y - editedOverlay.getHeight() / 2,
    // );

    // for (const face of faces) {
    //     const { landmarks } = face;
    //     const leftEye = landmarks.getLeftEye()[0];
    //     const rightEye = landmarks.getRightEye()[4];
    //     const nose = landmarks.getNose()[0];

    //     const newWidth = Math.sqrt(
    //         Math.pow(leftEye.x - rightEye.x, 2) +
    //         Math.pow(leftEye.y - rightEye.y, 2)
    //     );

    //     const ab = rightEye.y - leftEye.y;
    //     const ac = rightEye.x - leftEye.x;

    //     const tanACB = ab / ac;
    //     const deg = Math.atan(tanACB) * 180 / Math.PI;

    //     const editedGlasses = glasses.clone()
    //         .resize(newWidth + newWidth / 3, Jimp.AUTO)
    //         .rotate((-ab * 1 / ab) * deg);

    //     source.composite(
    //         editedGlasses,
    //         nose.x - editedGlasses.getWidth() / 2,
    //         nose.y - editedGlasses.getHeight() / 2,
    //     );
    // }

    return source.getBufferAsync('image/jpeg');

}



const faceDetection = async () => {

    await loadModels();

    const imageBuffer = fs.readFileSync(path.join(__dirname, 'assets/images/sam.jpg'));
    const output = await makeNFT(imageBuffer);

    await fs.writeFileSync(
        path.join(__dirname, `public/images/output_${Date.now()}.jpg`),
        output,
    );

    // // const faceDetectionNet = faceapi.nets.ssdMobilenetv1
    // const faceDetectionNet = faceapi.nets.tinyFaceDetector

    // // SsdMobilenetv1Options
    // const minConfidence = 0.5

    // // TinyFaceDetectorOptions
    // const inputSize = 32 * 10
    // const scoreThreshold = 0.5

    // function getFaceDetectorOptions(net) {
    //     return net === faceapi.nets.ssdMobilenetv1
    //         ? new faceapi.SsdMobilenetv1Options({ minConfidence })
    //         : new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold })
    // }

    // const faceDetectionOptions = getFaceDetectorOptions(faceDetectionNet)

    // await faceapi.nets.ssdMobilenetv1.loadFromDisk('./assets/models')
    // await faceapi.nets.tinyFaceDetector.loadFromDisk('./assets/models')
    // await faceapi.nets.faceLandmark68TinyNet.loadFromDisk('./assets/models')
    // await faceapi.nets.faceLandmark68Net.loadFromDisk('./assets/models')

    // const img = await loadImage('./assets/images/sam.jpg');
    // const { landmarks } = await faceapi.detectSingleFace(img, faceDetectionOptions).withFaceLandmarks()

    // const overlayValues = getOverlayValues(landmarks)
    // log(overlayValues)

}

(function start() {

    log('Inicio')

    faceDetection()
    // for (let index = 0; index < 5; index++) {
    //     const config = {
    //         images: [
    //             { path: '', type: '' }
    //         ]
    //     }
    //     log('loop')
    // }


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
