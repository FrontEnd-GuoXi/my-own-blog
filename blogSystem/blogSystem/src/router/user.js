const express = require('express');
const router = express.Router();
const { login } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

router.post('/login', (request, response, next) => {
    const { password, username } = request.body;

    return login(username, password).then(data => {

      if (data.username) {
        request.session.username = data.username;
        request.session.realname = data.realname;
        request.session.userId = data.id;

        console.log('login data_______',data);

        response.json(new SuccessModel(true, { realname: data.realname }, '登录成功'));
      } else {
        response.json(new SuccessModel(false, undefined, '登录失败'));
      }
      
    }).catch(e => {
      response.json(new ErrorModel({success: false, exception: e}, '登录异常'));
    })
});

module.exports = router;