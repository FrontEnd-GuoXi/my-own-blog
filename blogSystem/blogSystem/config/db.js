let MYSQL_CONFIG = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'gx_123',
  database: 'nodeblog'
};

let REDIS_CONFIG = {
  port: 6379,
  host: '127.0.0.1'
};

const env = process.env.NODE_ENV;

if (env === 'dev') {

  // 开发环境的配置
  MYSQL_CONFIG = MYSQL_CONFIG;
  REDIS_CONFIG = REDIS_CONFIG;
} else if (env === 'production') {

} else {
  MYSQL_CONFIG = MYSQL_CONFIG
  REDIS_CONFIG = REDIS_CONFIG;
}


module.exports = {
  MYSQL_CONFIG,
  REDIS_CONFIG
};