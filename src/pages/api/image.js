const Jimp = require('jimp'),
    path = require('path')

export default async function handler(req, res) {


    const subject = await Jimp.read('./public/assets/images/sam.jpg');
    const elements = JSON.parse(req.body)

    let groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    const groupedElements = groupBy(elements, 'parent')

    const zIndex = Object.keys(groupedElements)

    const a = [
        groupedElements['assessories'],
        groupedElements['images'],
    ]

    function allPossibleCombinations(items, isCombination = false) {
        if (items.length == 1) return items[0]
        else if (items.length == 2) {
            var combinations = []
            for (var i = 0; i < items[1].length; i++) {
                for (var j = 0; j < items[0].length; j++) {
                    if (isCombination) {
                        // clone array to not modify original array
                        var combination = items[1][i].slice();
                        combination.push(items[0][j]);
                    }
                    else {
                        var combination = [items[1][i], items[0][j]];
                    }
                    combinations.push(combination);
                }
            }
            return combinations
        }
        else if (items.length > 2) {
            var last2 = items.slice(-2);
            var butLast2 = items.slice(0, items.length - 2);
            last2 = allPossibleCombinations(last2, isCombination);
            butLast2.push(last2)
            var combinations = butLast2;
            return allPossibleCombinations(combinations, isCombination = true)
        }
    }

    const combinations = allPossibleCombinations(a)

    for await (let cbn of combinations) {
        const cbnSorted = cbn.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));

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
            subject
                .quality(100)
                .write(`./public/assets/output/${Math.random()}.png`);
        }

    }

    res.status(200).json({})
}