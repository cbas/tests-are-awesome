var should = require('chai').should()
var expect = require('chai').expect
var supertest = require('supertest')
var api = supertest('https://jsstrn.github.io')

var OK = 200
var NOT_FOUND = 404

describe('Students', function () {
  it('should exist on the server', function (done) {
    api.get('/ga-wdi-class/js/data.json')
      .set('Accept', 'application/json')
      .expect(OK, done)
  })
  it('should no longer exist on the server', function (done) {
    api.get('/ga-wdi-class/v1/js/data.json')
      .set('Accept', 'application/json')
      .expect(NOT_FOUND, done)
  })
})
