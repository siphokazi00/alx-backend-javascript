// 4-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let stub, consoleSpy;

  beforeEach(() => {
    // Stub the Utils.calculateNumber function to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log to verify the correct message
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original methods after each test
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20 and log correct message', function () {
    sendPaymentRequestToApi(100, 20);

    // Check if Utils.calculateNumber was called once
    expect(stub.calledOnce).to.be.true;

    // Check if Utils.calculateNumber was called with 'SUM', 100, 20
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Check if console.log was called with 'The total is: 10'
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
