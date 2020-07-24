const request = require('supertest')

const db = require('../database/dbConfig');

const server = require('./server');

describe('end point tests', function() {
    describe('POST /register and POST /login', function() {
        beforeAll(async() => {
                await db('users').truncate();
            })
            //Return code 201 for a successful Post
        it('POST /auth/register - should return status 201', function() {
                return request(server)
                    .post('/api/auth/register')
                    .send({ username: "Corby", password: "Pword" })
                    .then(res => {
                        expect(res.status).toBe(201);
                    })
            })
            //res.type should be json
        it(' POST /auth/register - res.type should match json', function() {
                return request(server)
                    .post('/api/auth/register')
                    .send({ username: "Corby", password: "Pword" })
                    .then(res => {
                        expect(res.type).toMatch(/json/i);
                    })
            })
            //Return code 200 for successful post
        it('POST /auth/login - should return status 200', function() {
                return request(server).post('/api/auth/login').send({ username: 'Corby', password: 'Pword' }).then(res => {
                    expect(res.status).toBe(200);
                })
            })
            //res.type should be json
        it(' POST /auth/login - res.type should match json"', function() {
                return request(server)
                    .post('/api/auth/login')
                    .send({ username: "Corby", password: "Pword" })
                    .then(res => {
                        expect(res.type).toMatch(/json/i);
                    })
            })
            //res.type should be json
        it(' GET /jokes/ - res.type should match json', function() {
                return request(server)
                    .get('/api/jokes/')
                    .then(res => {
                        expect(res.type).toMatch(/json/i);
                    })
            })
            //Get jokes is defined
        it(' GET /jokes/ - should be defined', function() {
            return request(server)
                .get('/api/jokes/')
                .then(res => {
                    expect(res.body).toBeDefined();
                })
        })
    })
}) 