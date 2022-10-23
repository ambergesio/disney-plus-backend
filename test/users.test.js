const app = require('../index');
const requestToAPI = require('supertest');
const chai = require('chai');
const { expect } = chai;


describe('Test Users endpoints in disney api', () => {
    it('should create a new user in /api/v1/auth/register', async () => {

        const newUser = {
            email: "johndoe@mail.com",
            password: "NewUser@1234",
            firstName: "John",
            lastName: "Doe"
        }

        const response = await requestToAPI(app)
        .post('/api/v1/auth/register')
        .send(newUser);

        expect(response.statusCode)
        .to.be.equal(201);

        expect(response.body)
        .to.have.property('error')
        .to.be.equal(false);

        expect(response.body)
        .to.have.property('message')
        .to.be.a('string')
        .to.be.equal('User registered successfully. You must login in order to continue.');

    });


    it('should login successfully from /api/v1/auth/login', async () => {


        const user = {
            email: "johndoe@mail.com",
            password: "NewUser@1234"
        }

        const response = await requestToAPI(app)
        .post('/api/v1/auth/login')
        .send(user);

        expect(response.statusCode)
        .to.be.equal(200);

        expect(response.body)
        .to.have.property("error")
        .to.be.equal(false);

        expect(response.body)
        .to.have.property("message")
        .to.be.a('string')
        .to.be.equal('User logged successfully');

        expect(response.body)
        .to.have.property("user")
        .to.be.an('object');

        expect(response.body.user)
        .to.have.property('email')
        .to.be.equal(user.email);

        expect(response.body)
        .to.have.property("token")
        .to.be.a('string');
    });

});
