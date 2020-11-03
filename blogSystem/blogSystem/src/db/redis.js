const redis = require('redis');
const { REDIS_CONFIG } = require('../../config/db');

const client = redis.createClient(REDIS_CONFIG.port, REDIS_CONFIG.host);

client.on('error', (error) => {
  console.error(error);
});

module.exports = client;