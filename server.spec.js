const request= require('supertest');
const server= require('./server');

describe('games', () => {
    describe('get', ()=>{
        it('test should see if the server is working', () => {
            return request(server)
            .get('/')
            .then(res => expect(res.status).toBe(200))
            .catch();
        })



    })








})