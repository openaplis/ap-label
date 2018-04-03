const assert = require('chai').assert
const path = require('path')

const histologySlideDirect = require('../src/core/histology-slide-direct')

// General Data file format
//C:\Program Files\General Data Company\Cassette Printing\Normal.itl|102|15-28044|1A|JA|YPII|ALQ15-28044.1A|15|28044

var data = {
    path: 'C:\Program Files\General Data Company\Cassette Printing\Normal.itl',
    column: 102,
    masterAccessionNo: '15-28044',
    blockLabel: '1A',
    notsure: 'JS',
    facility: 'YPII',
    aliquotOrderId: 'ALQ15-28044.1A',
    year: 15,
    number: 28044
}

describe('Histology Block General Data Tests', function () {
  it('generate delimeted string test', function (done) {
    done()
  })
})
