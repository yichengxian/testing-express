const mysqlTemplate = require('../../testing-common/mysql/MysqlTemplate');
const config = require('../../testing-config/app-config');
const loggerFactory = require('../../testing-common/logger/LoggerFactory');
/**
 *
 */
class MysqlInit {

    /**
     * 链接
     */
    static init(){
        const host = config.mysql.host;
        const username = config.mysql.username;
        const port = config.mysql.port;
        const database = config.mysql.database;
        const password = config.mysql.password;
        const pool = config.mysql.pool;
        const logEnable = config.mysql.logging.enable;
        mysqlTemplate.conn(host,username,port,database,password,pool,logEnable);
        // 验证链接
        mysqlTemplate.authenticate();

        loggerFactory.getLogger().info('==========mysql is async init ==============')
    }
}
module.exports = MysqlInit
