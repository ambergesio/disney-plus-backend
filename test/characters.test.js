const app = require('../index');
const requestToAPI = require('supertest');
const chai = require('chai');
const { expect } = chai;


const admin = {
    email: 'admin@mail.com',
    password: "Admin@1234"
};

const character = {
    image: 'image/characters/tarzan.jpg',    
    name: 'Tarzan',
    age: 20,
    weight: 180,
    history: "Tarzan is th king of the jungle",
};

const updatedCharacter = {
    image: 'image/characters/tarzan.png',
    age: 25,
    weight: 200
};




describe('Test characters endpoints in disney api', () => {
    it('should get al characters from /api/v1/characters', async () => {

        const response = await requestToAPI(app)
        .get('/api/v1/characters');

        expect(response.statusCode)
        .to.be.equal(200);

        expect(response.body)
        .to.have.property('error')
        .to.be.equal(false);

        expect(response.body)
        .to.have.property('message')
        .to.be.a('string')
        .to.be.equal('All characters retrieved successfully');

        expect(response.body)
        .to.have.property('data')
        .to.be.an('array');
    });


    it('should get a character with id 1 from /api/v1/characters/1', async () => {

        const response = await requestToAPI(app)
        .get('/api/v1/characters/1');

        expect(response.statusCode)
        .to.be.equal(200);

        expect(response.body)
        .to.have.property("error")
        .to.be.equal(false);

        expect(response.body)
        .to.have.property("message")
        .to.be.a('string')
        .to.be.equal("Character with id '1' found");

        expect(response.body)
        .to.have.property("data")
        .to.be.an('object')
        .to.have.property('name').to.be.equal("Mickey Mouse");
    });


    it('should login with admin credentials and create a new character', async () => {

        const login = await requestToAPI(app)
        .post('/api/v1/auth/login')
        .send(admin);

        const response = await requestToAPI(app)
        .post('/api/v1/characters')
        .set('Authorization', `Bearer ${login.body.token}`)
        .send(character);

        expect(response.statusCode)
        .to.be.equal(201);
        
        expect(response.body)
        .to.be.an('object')
        .to.have.property('error').to.be.equal(false);
        
        expect(response.body)
        .to.have.property('message')
        .to.be.a('string')
        .to.be.equal('New character created')
        
        expect(response.body)
        .to.have.property('data')
        .to.be.an('object')
        .to.have.property('name')
        .to.be.equal('Tarzan')
    });


    it('should login with admin credentials and update an existing character', async () => {

        const login = await requestToAPI(app)
        .post('/api/v1/auth/login')
        .send(admin);

        const response = await requestToAPI(app)
        .put('/api/v1/characters/6')
        .set('Authorization', `Bearer ${login.body.token}`)
        .send(updatedCharacter);

        expect(response.statusCode)
        .to.be.equal(200);
        
        expect(response.body)
        .to.be.an('object')
        .to.have.property('error').to.be.equal(false);
        
        expect(response.body)
        .to.have.property('message')
        .to.be.a('string')
        .to.be.equal("Character with id '6' updated successfully")
        
        expect(response.body)
        .to.have.property('data')
        .to.be.an('object')
        .to.have.property('age')
        .to.be.a('number')
        .to.be.equal(25)
    });

    it('should login with admin credentials and delete a character', async () => {

        const login = await requestToAPI(app)
        .post('/api/v1/auth/login')
        .send(admin);

        const response = await requestToAPI(app)
        .delete('/api/v1/characters/6')
        .set('Authorization', `Bearer ${login.body.token}`)

        expect(response.statusCode)
        .to.be.equal(200);
        
        expect(response.body)
        .to.be.an('object')
        .to.have.property('error').to.be.equal(false);
        
        expect(response.body)
        .to.have.property('message')
        .to.be.a('string')
        .to.be.equal("Character with id '6' deleted successfully.")
        
    });

    it('should not allow to delete a character without admin credentials', async () => {

        const response = await requestToAPI(app)
        .delete('/api/v1/characters/1')

        expect(response.statusCode)
        .to.be.equal(403);
        
        expect(response.body)
        .to.be.an('object')
        .to.have.property('error').to.be.equal(true);
        
        expect(response.body)
        .to.have.property('message')
        .to.be.a('string')
        .to.be.equal("You must login in order to perform the action.")
        
    });

});
