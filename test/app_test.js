const assert = require('assert');
const agent = require('supertest-koa-agent');
const app = require('../index.js');

describe('app test', ()=>{
  it('not found test', done=>{
    agent(app)
    .get('/somenotexistpage')
    .end((err,responce)=>{
      assert(err === null);
      assert(responce.error.status === 404);
      done();
    })
  });
  it('get timeline test', done=>{
    agent(app)
    .get('/timeline/username')
    .end((err,responce)=>{
      assert(err === null);
      assert(responce.body.result === true);
      done();
    });
  });
});
