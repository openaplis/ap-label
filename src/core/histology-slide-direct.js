'use strict'

const fs = require('fs')
const bwipjs = require('bwip-js')
const jimp = require('jimp')

module.exports = {
  getLabel: function () {

  },
  createImage: function (callback) {
    var image = new jimp(256, 256, function (err, image) {
      jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(function (font) {
        image.print(font, 10, 10, "Hello world!")
        image.write('testing.png', function (err) {
            console.log('done')
        })
      })
    })
  },
  generateBarcode: function (data, callBack) {
    bwipjs.toBuffer(data, function (err, png) {
        if (err) {
            if(err) return callBack(err)
        } else {
          fs.writeFile('barcode.png', png, function (err, result) {
            if(err) return callBack(err)
            callBack(null, 'file written')
            // `png` is a Buffer
            // png.length           : PNG file length
            // png.readUInt32BE(16) : PNG image width
            // png.readUInt32BE(20) : PNG image height
          })
        }
    })
  }
}
