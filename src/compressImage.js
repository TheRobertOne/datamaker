const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');

function getDirs(dir, arr) {
    var list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            arr.push(file);

            getDirs(file, arr);
        } else {
            /* Is a file */

        }
    });
    return arr
}



function compressImage(tostr) {
    let arr = getDirs(path.join(__dirname, 'image'), []);


    arr.map((item, index) => {

        let temStr = item.replace('datamaker/src', 'datamaker/'+tostr);
        imagemin([item + '/*.png'], temStr, { use: [imageminPngquant()] }).then(() => {
            console.log('Images optimized');

        });
    });

}
module.exports = compressImage;