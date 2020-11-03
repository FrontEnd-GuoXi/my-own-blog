const express = require('express');
const router = express.Router();
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');
const loginCheck = require('../middleware/loginCheck');


router.get('/list', loginCheck, (request, response, next) => {
  let { author='', keyword='' } = request.query;

  return getList(author, keyword).then((list) => {
    response.json(new SuccessModel(true, list));
  });
});

router.get('/detail', (request, response, next) => {
  const result = getDetail(request.query.id)
  return result.then(data => {
    if (data) {
      data.createtime = new Date(data.createtime).toLocaleString();
      response.json(new SuccessModel(true, data));
    } else {
      response.json(new ErrorModel(false, '博客不存在'));
    }
  })
});

router.post('/new', loginCheck, (request, response, next) => {
  request.body.author = request.session.username;
  console.log('newBlog__data____',request.body);
  const result = newBlog(request.body)
  return result.then(data => {
    response.json(new SuccessModel(true, data, '发布成功'))
  })
})

router.post('/update', loginCheck, (request, response, next) => {
  const result = updateBlog(request.query.id, request.body)
  return result.then(val => {
      if (val) {
        response.json(
              new SuccessModel()
          )
      } else {
        response.json(
              new ErrorModel('更新博客失败')
          )
      }
  })
})

router.post('/del', loginCheck, (request, response, next) => {
  const author = request.session.username
  const result = delBlog(request.query.id, author)
  return result.then(val => {
      if (val) {
        let sm = new SuccessModel(true, null, '删除成功');
        console.log(sm);
        response.json(sm);
      } else {
        console.log('......')
        response.json(new ErrorModel(false,'删除博客失败'));
      }
  });
});

module.exports = router;


