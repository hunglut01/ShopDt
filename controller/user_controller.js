var mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
var User = mongoose.model('../models/User');
exports.register = function(req, res) {
    const { Email, Name, Address, Phone, Password, Password1 } = req.body;
    var newUser = new User(req.body);
    newUser.Password = bcrypt.hashSync(req.body.Password, 10);
    newUser.save(function(err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

exports.sign_in = function(req, res) {
};

exports.loginRequired = function(req, res, next) {
};