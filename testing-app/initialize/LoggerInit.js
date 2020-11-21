const  config = require('../../testing-config/app-config');
const loggerFactory = require('../../testing-common/logger/LoggerFactory');
/**
 * logger init
 * @author ycx
 */
class LoggerInit {

    /**
     *
     * @param app
     */
    static init(app){
        loggerFactory.configure(config.log4j.configuration)
        loggerFactory.useLogger(app)
    }
}

module.exports = LoggerInit
