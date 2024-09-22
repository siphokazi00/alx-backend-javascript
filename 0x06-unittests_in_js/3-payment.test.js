// 3-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    spy.restore(); // Restore the original function after each test
  });

  it('should call Utils.calculateNumber with SUM, 100, 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true; // Check if it was called once
    expect(spy.calledWith('SUM', 100, 20)).to.be.true; // Check if it was called with correct arguments
  });
});
