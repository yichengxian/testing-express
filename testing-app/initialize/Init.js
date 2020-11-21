//conn mysql
const mysqlInit = require('./MysqlInit');
//conn redis
const redisInit = require('./RedisInit');
const loggerInit = require('./LoggerInit');

/**
 * 初始化
 */
class Init {

    /**
     * init all
     * @param app
     */
    static initAll(app) {
        loggerInit.init(app)

        mysqlInit.init();
        redisInit.init();
    }
}

module.exports = Init
