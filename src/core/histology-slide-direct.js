'use strict'

const fs = require('fs')
const bwipjs = require('bwip-js')
const jimp = require('jimp')

module.exports = {
    getLabel: function () {

    },
    generateBarcode: function (callBack) {
      bwipjs.toBuffer({
        bcid:        'datamatrix',       // Barcode type
        text:        '0123456789',    // Text to encode
        scale:       3,               // 3x scaling factor
        height:      10,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign:  'center',        // Always good to set this
      }, function (err, png) {
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
      });
    }
}
