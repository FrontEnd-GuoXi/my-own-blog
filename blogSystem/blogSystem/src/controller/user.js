const { exec } = require('../db/mysql');
const xss = require('xss')

const login = (username, password) => {
  username = xss(username);
  password = xss(password);

  let sql = `select username, realname, id from tb_user where username='${username}' and password='${password}';`;

 return exec(sql).then(data => {
   return data[0];
 }).catch(e => {
   return e
 });
}

module.exports.login = login;