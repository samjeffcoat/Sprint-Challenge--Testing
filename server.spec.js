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
    })
//2019 in title?
        it('Check to see if a game was made in 2019', () => {
            return request(server)
            .get('/games')
        .then(res => expect(res).stringMatching(/2019/))
        .catch();
    })
//Post endpoint
describe('post', ()=> {
    it('should return 201 on post', () => {
        return request(server)
        .post('/games')
        .send({ title:  'FIFA 2017', genre: 'Sports', releaseYear: 2017})
        .then(res => {
            expect(res.status).toBe(201)
        })
    })
    it('should return 422 if the body is not provided', () => {
        return request(server)
        .post('/games')
        .send()
        .then(res=> expect(res.status).toBe(422))
    })
    it('Should return our latest posted game', ()=> {
        return request(server)
        .post('/games')
        .send({title: 'Super Smash Brothers'})
        .then(res => {
            expect(res.body[res.body.length-1].name.toBe('Super Smash Brothers'))
        })
    })
})
})