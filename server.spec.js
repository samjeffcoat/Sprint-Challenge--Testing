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
        it('should get all games with status 200', () => {
            return request(server)
            .get('/games')
            .then(res=> expect(res.status).toBe(200))
        })
        it('should check if get all of our games returns an array', () => {
            return request(server)
            .get('/games')
            .then(res => expect(res.body.length).toBeGreaterThan(0))
            .catch();
        })

        it('Check to see if a game was made in 2019', () => {
            return request(server)
            .get('/games')
        .then(res => expect(res).stringMatching(/2019/))
        .catch();



    })








})