const ioRedis = require('ioredis');

/**
 * redis template
 * <link>https://github.com/luin/ioredis</link>
 */
class RedisTemplate {

    /**
     *连接接对象
     * @type {ioRedis}
     */
    static #ioRedisObj;

    /**
     * 初始化连接redis
     *
     */
    static conn(host, port, db, password, keepAlive) {
        this.#ioRedisObj = new ioRedis({
            host: host,
            port: port,
            password: password,
            db: db,
            keepAlive: keepAlive,
        });
    }

    /**
     * 获取客户端实例
     */
    static getClient(){
        if(undefined === this.#ioRedisObj){
            throw new Error('redis is not conn,so you must be check you code!')
        }
        return this.#ioRedisObj;
    }


    /**
     * 调用redis set 命令
     * @param key
     * @param value
     * @param expire 秒
     * @return {void}
     */
    static set(key, value, expire) {
        this.getClient().set(key, value, 'EX', expire)
    }

    /**
     * 调用redis get 命令
     * @param key
     * @return {Object}
     */
    static get(key) {
        return this.getClient().get(key);
    }

    /**
     * 调用 redis expire 命令
     * @param key 失效的key
     * @param second 秒
     * todo
     */
    static expire(key, second) {
        return this.getClient().expire(key, second);
    }

    /**
     * 调用setNx 命令 并且设置失效时间
     * @param key
     * @param value
     * @param expire
     * @return {boolean}
     */
    static setNx(key, value, expire) {

        return this.getClient().setnx(key, value).then(res => {
            if (1 === res) {
                this.expire(key, expire);
            }
            return res;
        });
    }

    /**
     * 调用incrby 命令 并且成功后设置失效时间
     * @param key {string}
     * @param  increment {number} 整数
     * @param expire {number}
     */
    static incrBy(key, increment,expire){

        return this.getClient().incrby(key, increment).then(res => {

            if (null !==res && res >= 0) {
                this.expire(key, expire);
            }
            return res;
        });
    }

    /**
     * 调用del
     * @param key
     */
    static del(key){
        return this.getClient().del(key);
    }


}

module.exports = RedisTemplate


