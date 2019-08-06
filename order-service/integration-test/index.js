/* eslint-env mocha */
const supertest = require('supertest')

describe('order-service', () => {
  const api = supertest('http://192.168.99.100:3000')
  it('returns a 200 for a known order', (done) => {
    api.get('/movies/premieres')
      .expect(200, done)
  })
})
