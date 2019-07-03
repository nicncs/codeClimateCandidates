const express = require('express');
const router = express.Router();

const middleware = require('../middleware');

//Create order
router.post('/process', middleware.checkToken, (req,res)=>{
    //console.log(req.body);
    const paymentInfo = req.body;
    if(!paymentInfo){
        res.json({
            status: 'failed',
            code: 301,
            message: 'Payment info is missing.'
        });
    }else{
        if(!paymentInfo.orderId || !paymentInfo.amount){
            res.json({
                status: 'failed',
                code: 301,
                message: 'Order Id or amount is missing.'
            });
        }else{
            const paymentState = ['DECLINED', 'COMFIRMED', 'DECLINED', 'COMFIRMED', 'DECLINED', 'COMFIRMED' ];
            let paymentStatus = paymentState[Math.floor(Math.random()*paymentState.length)];

            res.json({
                paymentId: '5cc0aba37025a21a3c88b51a',
                amount: paymentInfo.amount,
                orderId: paymentInfo.orderId,
                paymentStatus: paymentStatus
            });
        }
    }
});

module.exports = router;
