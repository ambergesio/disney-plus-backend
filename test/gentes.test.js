const app = require('../index');
const requestToAPI = require('supertest');
const chai = require('chai');
const { expect } = chai;


describe('genres in api', () => {
    it('get al genres from /api/v1/movies', async () => {
        const response = await requestToAPI(app).get('/api/v1/genres');
        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.have.property('error');
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('data');
        expect(response.body.error).to.be.equal(false);
        expect(response.body.message).to.be.equal('All genres found');
        expect(response.body.data).to.be.an('array');
    });
});