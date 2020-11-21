const redisTemplate = require('../../testing-common/redis/RedisTemplate');
const config = require('../../testing-config/app-config');
const loggerFactory = require('../../testing-common/logger/LoggerFactory');
/**
 * redis init
 */
class RedisInit {
    /**
     * 链接redis
     */
    static init(){
        const host = config.redis.host;
        const port = config.redis.port;
        const db = config.redis.database;
        const password = config.redis.password;
        const keepAlive = config.redis.pool.keepAlive;
        redisTemplate.conn(host,port,db,password,keepAlive);
        loggerFactory.getLogger().info('===========redis is async init ============')
    }
}

module.exports =RedisInit
