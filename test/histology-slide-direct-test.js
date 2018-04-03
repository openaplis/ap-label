const assert = require('chai').assert
const path = require('path')

const histologySlideDirect = require('../src/core/histology-slide-direct')

var data = {
  bcid:        'datamatrix',       // Barcode type
  text:        '0123456789',    // Text to encode
}

describe('Histology Slide Direct Tests', function () {
  it('generate barcode test', function (done) {
    histologySlideDirect.generateBarcode(data, function (err, result) {
      if(err) console.log(err)
      console.log(result)
      done();
    })
  })

  it('generate image test', function (done) {
    histologySlideDirect.createImage(function (err, result) {
      if(err) console.log(err)
      console.log(result)
      done();
    })
  })
})
