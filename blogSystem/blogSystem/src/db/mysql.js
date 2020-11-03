const mysql = require('mysql');
const { MYSQL_CONFIG } = require('../../config/db');

const connectPoll = mysql.createPool({ connectionLimit: 10, ...MYSQL_CONFIG });

// 直接使用 pool.query
const exec = (sql) => {
  return new Promise((resolve, reject) => {
    connectPoll.query(sql, function (err, results, fields) {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
};

module.exports = { exec };