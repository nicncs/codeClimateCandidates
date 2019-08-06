'use strict'
const status = require('http-status')

module.exports = (app, options) => {
  const {repo} = options

  app.get('/orders', (req, res, next) => {
    repo.getAllorders().then(orders => {
      res.status(status.OK).json(orders)
    }).catch(next)
  })

  app.get('/orders/:id', (req, res, next) => {
    repo.getOrderById(req.params.id).then(movie => {
      res.status(status.OK).json(movie)
    }).catch(next)
  })

  app.post('/place-order', (req, res, next) => {
    const validate = req.container.cradle.validate
    const paymentService = req.container.resolve('paymentService')

    Promise.all([
      // validate(req.body.user, 'user'),
      validate(req.body.order, 'order')
    ])
    .then(([user, order]) => {
      const payment = {
        userName: 'Khuepham',
        currency: 'aml',
        number: '4234234234232423423423432',
        cvc: 123,
        exp_month: 12,
        exp_year: 2019,
        quantity: order.quantity,
        price: order.totalPrice,
        orderId: order.id,
        description: `
          Get status for order #${order.id},
          total ${order.total}`
      }

      return Promise.all([
        paymentService(payment),
        Promise.resolve(order)
      ])
    })
    .then(([paid, user, order]) => {
      return Promise.all([
        repo.makeBooking(user, order),
        Promise.resolve(paid),
      ])
    })
    .then(([order, paid, user]) => {
      return Promise.all([
        repo.generateStatus(paid, order),
      ])
    })
    .catch(next)
  })

  app.get('/order/verify/:orderId', (req, res, next) => {
    repo.getOrderById(req.params.orderId)
      .then(order => {
        res.status(status.OK).json(order)
      })
      .catch(next)
  })

}
