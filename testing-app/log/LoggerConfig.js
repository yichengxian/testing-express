/*
//const morgan = require('morgan');
//const ClientUtil = require('../../testing-common/util/ClientUtil');
//const FileStreamRotator = require('file-stream-rotator');
//const fs = require('fs');
//const path = require('path');
//const CommonConstant = require('../../testing-common/constant/CommonConstant');

const  config = require('../../testing-config/app-config');
const loggerFactory = require('../../testing-common/logger/LoggerFactory');

/!**
 * @author ycx
 * @description 日志配置类 已经更换log4j
 * <a>https://www.cnblogs.com/chyingp/p/node-learning-guide-express-morgan.html<a/>
 *!/
class LoggerConfig {

/!*    /!**
     *
     * @return {function(*=, *=, *): void}
     *!/
    static logger(app) {
        this.#token();

        //排除框架默认的选项
        switch (config.morgan.name) {
            case 'combined':
                break;
            case 'common':
                break;
            case 'default':
                break;
            case 'short':
                break;
            case 'tiny':
                break;
            case 'dev':
                break;
            default:
                morgan.format(config.morgan.name, config.morgan.format);
        }
        //
        if (config.morgan.enableFile) {
            app.use(morgan(config.morgan.name, {stream: this.#accessLogStream()}));
        }
        //控制台
        app.use(morgan(config.morgan.name))
    }*!/

/!*    /!**
     * 自定义token
     *!/
    static #token() {
        //本地时间
        morgan.token('dateZh', () => new Date().toLocaleString());
        //获取客户端ip
        morgan.token('clientIp', (req, res) => ClientUtil.getClientIp(req));
        morgan.token('token', (req) => req.header(CommonConstant.TOKEN_KEY) || null)
    }

    /!**
     * create a rotating write stream
     *!/
    static #accessLogStream() {
        //
        const logDir = path.join(__dirname, config.morgan.logDir)
        //创建日志目录
        fs.existsSync(logDir) || fs.mkdirSync(logDir);
        //文件格式 暂未做code 分离 具体请看源码
        const stream = FileStreamRotator.getStream({
            date_format: 'YYYY-MM-DD',
            filename: path.join(logDir, config.morgan.accessName+'-%DATE%.log'),
            //'daily', 'test', 'm', 'h', 'custom'
            frequency: 'daily',
            verbose: false,
            //size
        });
        return stream;
    }

    /!**
     * err stream
     * @return {WriteStream}
     *!/
    static #errorLogStream() {
        const logDir = path.join(__dirname, config.morgan.logDir)
        //创建日志目录
        fs.existsSync(logDir) || fs.mkdirSync(logDir);
        const stream = FileStreamRotator.getStream({
            date_format: 'YYYY-MM-DD',
            filename: path.join(logDir, config.morgan.errorName+'-%DATE%.log'),
            frequency: 'daily',
            verbose: false
        });
        return stream;
    }*!/
/!*
    /!**
     *
     * @param req {Request}
     * @param err {Error}
     *!/
    static errLog(req, err) {
        const meta = '[' + new Date().toLocaleString() + ']-method:' + req.method + '-uri:' + req.url + '\r\n' + err.stack + '\r\n';
        this.#errorLogStream().write(meta)
        console.error(meta)
    }*!/

    /!**
     * init
     * @param app
     *!/
    static logger(app){
        loggerFactory.configure(config.log4j.configuration)
        loggerFactory.useLogger(app)
    }


}


module.exports = LoggerConfig
*/
