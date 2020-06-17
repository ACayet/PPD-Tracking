const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../app');


describe('Unit testing the / route', function() {

  it('should return OK status', function() {
    return request(app)
      .get('/')
      .expect(200)
  });

  it('should return OK status', function() {
    return request(app)
      .post('/')
      .send([{"report.code": "test"}])
      .expect('Content-Type', /json/)
      .expect(201, {success: true})

  });

});