const express= require('express');
const server= express();
server.use(express.json())

const games = [
    {
        id: 0,
        title: 'Pacman',
       genre: 'Arcade',
        releaseYear: 1980
    },
    {
        id: 1,
        title: 'Super Mario Brothers',
        genre: 'Arcade',
        releaseYear: 1985
    },
    {
        id: 3,
        title: 'Madden 2019',
        genre: 'Sports',
        releaseYear: 2019
    },
    {
        id: 4,
        title: 'MLB the Show',
        genre: 'Sports',
        releaseYear: 2019
    },
    {
        id: 5,
        title: 'NCAA Football 2015',
        genre: 'Sports',
        releaseYear: 2015
    },
    {
        id: 6,
        title: 'FIFA 2019',
        genre: 'Sports',
        releaseYear: 2019
    },
];

server.get('/', (req, res)=> {
    res.send('Your site is working!')
})

server.get('/games', (req, res)=> {
    res.json(games);
})

module.exports=server;