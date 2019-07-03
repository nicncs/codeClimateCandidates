const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    userId: {type: String, default:''},
    orderStatus: {type: String, default:'CREATED'},
    amount: {type: Number, default:'0'},
    createDate: {type: Date, default:Date.now},
    updateDate: {type: Date, default:Date.now}
});

module.exports = mongoose.model('Order', orderSchema);