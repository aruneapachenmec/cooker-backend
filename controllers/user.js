const User = require('../models/user');

module.exports = {
  index: (req, res) => {
    let status = 200;
    let result = {} ;
    User.find({}, (err, data) => {
      if(!err) {
        result.status = status;
        result.error = err;
        result.data = data;
        res.status(status).send(result);
      }else{
        result.status = 500;
        result.error = err;
        res.status(500).send(result);
      }
    })
  }
}