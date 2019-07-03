const express = require('express');
const router = express.Router();
const request = require('request');

const middleware = require('../middleware');
const config = require('../config/Config')

let Orders = require('../models/Orders/orders');

//Create order
router.post('/create', middleware.checkToken,(req,res)=>{
    //console.log(req.body);
    const orderInfo = req.body;
    if(!orderInfo){
        res.json({
            status: 'failed',
            code: 301,
            message: 'Data is missing.'
        });
    }else{
        if(!orderInfo.userId){
            res.json({
                status: 'failed',
                code: 301,
                message: 'User Id is missing.'
            });
        }else{

            let newOrder = new Orders(
                {
                    userId: orderInfo.userId,
                    orderStatus: 'CREATED',
                    amount: orderInfo.amount
                }
            );

            newOrder.save((err, newOrderInfo)=>{
                if(err){
                    console.log(err);
                    res.json({
                        status: 'failed',
                        code: 500,
                        message: 'Failed to create order'
                    });
                }else{

                    processPayment({
                        orderId: newOrderInfo._id,
                        amount: orderInfo.amount
                    })
                    .then((response)=>{
                        //console.log(response);

                        //Update state
                        if(response.paymentStatus === 'COMFIRMED'){
                            updateOrdersState(response.orderId, 'CONFIRMED')
                            .then((response)=>{
                                
                                upadateToDelivered(response.orderId);
                                res.json({
                                    status: 'ok',
                                    code: 200,
                                    orderId: response.orderId,
                                    orderStatus: response.orderStatus
                                });
                            })
                            .catch((error)=>{
                                console.log(error);
                                res.json({
                                    status: 'failed',
                                    code: 500,
                                    message: 'Failed to update order state.'
                                });
                            });
                        }else{
                            updateOrdersState(response.orderId, 'CANCELED')
                            .then((response)=>{
                                res.json({
                                    status: 'ok',
                                    code: 200,
                                    orderId: response.orderId,
                                    orderStatus: response.orderStatus
                                });
                            })
                            .catch((error)=>{
                                console.log(error);
                                res.json({
                                    status: 'failed',
                                    code: 500,
                                    message: 'Failed to update order state.'
                                });
                            });
                        }
                    })
                    .catch((error)=>{
                        console.log(error);
                        res.json({
                            status: 'failed',
                            code: 500,
                            message: 'Failed to process payment'
                        });
                    });
                }
            });
        }
    }
});

//Update order status
router.post('/cancelOrders', middleware.checkToken, (req,res)=>{
    const orderInfo = req.body;
    if(!orderInfo.orderId || !orderInfo.orderStatus){
        res.json({
            status: 'failed',
            code: 301,
            message: 'Missing Order Id or Order Status'
        });

    }else{
        //console.log(orderInfo);
        updateOrdersState(orderInfo.orderId, 'CANCELED')
        .then((response)=>{
            res.json({
                status: 'ok',
                code: 200,
                orderId: response.orderId,
                orderStatus: response.orderStatus
            });
        })
        .catch((error)=>{
            console.log(error);
            res.json({
                status: 'failed',
                code: 500,
                message: 'Failed to update order state.'
            });
        });
    }
});

//Get order status
router.get('/checkorder/:orderId', middleware.checkToken, (req,res)=>{
    let orderInfo = req.params;

    if(!orderInfo.orderId){
        res.json({
            status: 'failed',
            code: 301,
            message: 'Missing Order Id.'
        });
    }else{
        Orders.findById(orderInfo.orderId, (err, orderData)=>{
            if(err){
                console.log(err);
                res.json({
                    status: 'failed',
                    code: 500,
                    message: 'Failed to retrieve order info.'
                });
            }else{
                res.json({
                    status: 'ok',
                    code: 200,
                    orderId: orderData.id,
                    orderStatus: orderData.orderStatus
                });
            }
        });
    }
});

//Call Payment APP
const processPayment = (paymentInfo)=>{
    return new Promise((resolve, reject)=>{
        if(!paymentInfo){
            reject(new Error('No payment info found.'));
        }else{

            const options = { 
                method: 'POST',
                url: config.paymentApp.baseUrl + config.paymentApp.paymentProcessApi,
                headers: 
                { 
                    Authorization: `Bearer ${config.paymentApp.mockedAuth}`,
                    'Content-Type': 'application/json' 
                },
                body: { orderId: paymentInfo.orderId, amount: paymentInfo.amount},
                json: true 
            };

            request(options, (error, response, body)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(body);
                }
            });
        }
    });
};

//Change state to DELIVERED after X amount of time (3 seconds)
const updateOrdersState= (orderId, orderStatus)=>{
    return new Promise((resolve, reject)=>{
        if(!orderId || !orderStatus){
            reject(new Error('Missing orderId or orderStatus'));
        }else{
            Orders.findByIdAndUpdate({_id:orderId}, {orderStatus:orderStatus, updateDate: Date.now()}, 
                {new: true}, (err, updatedOrderInfo)=>{
                if(err){
                    reject(err);
                }else{
                    resolve({
                        orderId: updatedOrderInfo.id,
                        orderStatus: updatedOrderInfo.orderStatus
                    });
                }
            });
        }
    });
};

const upadateToDelivered = (orderId)=>{
    setTimeout(()=>{
        updateOrdersState(orderId, 'DELIVERED')
        .then((response)=>{
            console.log(`ORDER ${response.orderId} update to DELIVERED`);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, 3000);
}


module.exports = router;
