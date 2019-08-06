'use strict'

const repository = (db) => {
  const collection = db.collection('orders')

  const createOrder = (user, booking) => {
    return new Promise((resolve, reject) => {
      const payload = {
        city: booking.city,
        userType: (user.membership) ? 'loyal' : 'normal',
        totalAmount: booking.totalAmount,
        cinema: {
          name: booking.cinema,
          room: booking.cinemaRoom,
          seats: booking.seats.toString()
        },
        movie: {
          title: booking.movie.title,
          format: booking.movie.format,
          schedule: booking.schedule
        }
      }

      db.collection('booking').insertOne(payload, (err, booked) => {
        if (err) {
          reject(new Error('An error occuered registring a user booking, err:' + err))
        }
        resolve(payload)
      })
    })
  }

  const generateStatus = (paid, booking) => {
    return new Promise((resolve, reject) => {
      const payload = Object.assign({}, booking, {orderId: paid.charge.id, description: paid.description})
      db.collection('tickets').insertOne(payload, (err, ticket) => {
        if (err) {
          reject(new Error('an error occured registring a ticket, err:' + err))
        }
        resolve(payload)
      })
    })
  }

  const getAllOrders = () => {
    return new Promise((resolve, reject) => {
      const orders = []
      const cursor = collection.find({}, {title: 1, id: 1})
      const addOrder = (movie) => {
        orders.push(movie)
      }
      const sendOrders = (err) => {
        if (err) {
          reject(new Error('An error occured fetching all orders, err:' + err))
        }
        resolve(orders.slice())
      }
      cursor.forEach(addOrder, sendOrders)
    })
  }

  const getOrderById = (id) => {
    return new Promise((resolve, reject) => {
      const projection = { _id: 0, id: 1, title: 1, format: 1 }
      const sendOrder = (err, movie) => {
        if (err) {
          reject(new Error(`An error occured fetching a movie with id: ${id}, err: ${err}`))
        }
        resolve(movie)
      }
      collection.findOne({id: id}, projection, sendOrder)
    })
  }

  const disconnect = () => {
    db.close()
  }

  return Object.create({
    makeBooking,
    generateStatus,
    getAllOrders,
    getOrderList,
    getOrderById,
    disconnect
  })
}

const connect = (connection) => {
  return new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('connection db not supplied!'))
    }
    resolve(repository(connection))
  })
}

module.exports = Object.assign({}, {connect})
