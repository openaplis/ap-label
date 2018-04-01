const assert = require('chai').assert
const path = require('path')

const histologySlideDirect = require('../src/core/histology-slide-direct')

describe('Histology Slide Direct Tests', function () {
  it('generate barcode test', function (done) {
    histologySlideDirect.generateBarcode(function (err, result) {
      if(err) console.log(err)
      console.log(result)
      done();
    })
  })
})
