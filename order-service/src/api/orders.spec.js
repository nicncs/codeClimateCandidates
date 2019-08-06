/* eslint-env mocha */
const request = require('supertest')
const server = require('../server/server')

describe('Orders API', () => {
  let app = null
  let testOrders = [{
      id: '1',
      quantity: 123,
      totalPrice: 123000000
    }, {
      id: '2',
      quantity: 123,
      totalPrice: 123000000
    }, {
      id: '3',
      quantity: 123,
      totalPrice: 123000000
    }]

  let testRepo = {
    getAllOrders () {
      return Promise.resolve(testOrders)
    },
    getOrderById (id) {
      return Promise.resolve(testOrders.find(movie => movie.id === id))
    }
  }

  beforeEach(() => {
    return server.start({
      port: 3000,
      repo: testRepo
    }).then(serv => {
      app = serv
    })
  })

  afterEach(() => {
    app.close()
    app = null
  })

  //demo for test
  it('returns 200 for an order', (done) => {
    request(app)
      .get('/orders/1')
      .expect((res) => {
        res.body.should.containEql({
          id: '1',
          quantity: 123,
          totalPrice: 123000000
        })
      })
      .expect(200, done)
  })
})
