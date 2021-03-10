const message = require('../src/message').handler;

const expect = require('chai').expect

describe('test suite for message', () => {
    it('returns an object containing a text string', async () => {
        const messageData = await message();
        const contentType = messageData.headers['Content-Type'];
        const { statusCode } = messageData;
        expect(contentType).to.equal('application/json')
        expect(statusCode).to.equal(200)
    })
})