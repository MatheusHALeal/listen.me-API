const express = require('express');
const router = express.Router();
const User = require('../src/user/user')
const jwt = require('jsonwebtoken')

router.post('/register', (req, res, next) => {
    const newUser = new User(req.body);

    newUser.save(function (err, newUser) {
      if (err) return console.error(err);
    });

    jwt.sign({newUser}, 'secretKey', { expiresIn: '1000s'},  (err, token) =>{
        res.json({ token })
    });
});

module.exports = router;