const log4js = require('log4js');


/**
 * @author yichengxian
 * log4j 日志处理
 * how to use：</br>
 * // 获得logger对象 注意使用的是哪个 categories
 * const logger = LoggerFactory.getLogger('info');
 *
 * logger.debug('%s','debug日志');
 * logger.info('%s','info日志');
 * logger.error('%s','error日志');
 * //以上都会打入info categories 文件中
 *
 */
class LoggerFactory {

    /**
     * 配置log4j
     * @param configuration {Configuration}
     */
    static configure(configuration) {

        log4js.configure(configuration)
    }

    /**
     * app use this
     * @param app
     * @param name 参照getLogger 方法
     * @param format 格式化输出 可不填
     */
    static useLogger(app, name, format) {
        let options = {};
        if (undefined !== format) {
            options.format = format;
        }
        app.use(log4js.connectLogger(this.getLogger(name),options));
    }

    /**
     * @param name 取categories项 可不填为默认的info
     * @return {Logger}
     */
    static getLogger(name) {
        const logger = log4js.getLogger(name || 'info');
        return logger;
    }


}

module.exports = LoggerFactory
