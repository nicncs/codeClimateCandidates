
module.exports = {
    dbConfig: {
        mongoServer: 'setelcluster-nigfk.mongodb.net',
        mongoUser:'dbUser',
        mongoPassword:'dbUserPassword123',
        mongoDB:'setelAssement',
    },
    paymentApp:{
        baseUrl:'http://localhost:4000/payment',
        paymentProcessApi: '/process',
        mockedAuth: 'testPayment'
    },
    ordersApp:{
        mockedAuth:'testOrders'
    }

};