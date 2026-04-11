const { createClient } = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-17234.c325.us-east-1-4.ec2.cloud.redislabs.com',
        port: 17234
    }
});

module.exports = redisClient