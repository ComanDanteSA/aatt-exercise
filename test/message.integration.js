const expect = require('chai').expect
const rp = require('request-promise');

var URI = process.env.URI;

console.log(URI)

describe('GET message', () => {
    it('returns a response containing message and timeStamp', async () => {
        const options = {
                uri: URI,
                method: 'GET',
                headers: {
                    'User-Agent': 'Request-Promise'
                },
                json: true // Automatically parses the JSON string in the response
            };
        
        const request = await rp(options);
        const { message, timestamp } = request;
        expect(message).to.equal('Automate all the things!');
        expect(typeof timestamp).to.equal('number');
    })
})