// 6-payment_token.test.js

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with the correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.be.an('object');
      expect(response.data).to.equal('Successful response from the API');
      done(); // Call done to signal that the test is complete
    }).catch((err) => done(err)); // Catch any errors
  });
});
