/* eslint-env mocha */
const test = require('assert')
const {validate} = require('./')

console.log(Object.getPrototypeOf(validate))

describe('Schemas Validation', () => {
  it('can validate a user object', (done) => {
    const testPayment = {
      userName: 'Khuepham',
      currency: 'aml',
      number: '4242424242424242',
      cvc: '123',
      exp_month: '12',
      exp_year: '2019',
      amount: 71,
      description: `
        Get Order status randomly`
    }

    validate(testPayment, 'payment')
      .then(value => {
        console.log('validated')
        console.log(value)
        done()
      })
      .catch(err => {
        console.log(err)
        done()
      })
  })
})
