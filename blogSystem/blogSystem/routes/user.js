var express = require('express');
var R = express.Router();

R.post('/login', (req, res, next) => {
    const { username, password } = res.body;
});

module.exports = R;