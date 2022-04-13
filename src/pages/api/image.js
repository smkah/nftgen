const Jimp = require('jimp'),
    path = require('path')
const { v4 } = require('uuid');
const { readdirSync, rmSync } = require('fs')

export default async function handler(req, res) {

    const path = 'public/assets/output'

    readdirSync(path).forEach(f => rmSync(`${path}/${f}`));

    const elements = JSON.parse(req.body)

    let groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    const groupedElements = groupBy(elements, 'parent')

    const parts = [
        groupedElements['assessories'],
        groupedElements['images'],
    ]

    async function saveElement(combination, name) {
        const subject = await Jimp.read('./public/assets/images/sam.jpg');
        const cbnSorted = combination.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));

        for await (let el of cbnSorted) {
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
        }

        subject
            .quality(100)
            .write(`./public/assets/output/${name}.jpg`);

        return
    }

    function cartesian(...args) {
        let r = [], max = args.length - 1;
        function helper(arr, i) {
            for (let j = 0, l = args[i].length; j < l; j++) {
                let a = arr.slice(0); // clone arr
                a.push(args[i][j]);
                if (i == max) {
                    const name = `image-${v4()}`
                    saveElement(a, name)
                    r.push({ name, a });
                } else {
                    helper(a, i + 1);
                }
            }
        }
        helper([], 0);
        return r;
    }

    const results = cartesian(...parts)

    res.status(200).json(results)
}