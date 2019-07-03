const config = require('./config/Config');

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; 
    
  
    if (token) {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }

        if(token === config.paymentApp.mockedToken){
            next();
        }else{
            return res.json({
                status: 'failed',
                code: 401,
                message: 'Token is not valid.'
            });
        }
    } else {
      return res.json({
        status: 'failed',
        code: 401,
        message: 'Auth token is not supplied'
      });
    }
  };
  
  module.exports = {
    checkToken: checkToken
  }