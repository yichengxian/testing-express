const BizResult = require('../api/BizResult');
const logger = require('../logger/LoggerFactory');
const BizException = require("./BizException");

/**
 * @author ycx
 * @description 统一异常拦截
 */
class GlobalExceptionHandler {
    /**
     *
     * @param app
     */
    static handler(app) {
        app.use((err, req, resp, next) => {
            // set locals, only providing error in development
            resp.locals.message = err.message || err.msg;
            resp.locals.error = req.app.get('env') === 'development' ? err : {};

            //业务异常
            if (err instanceof BizException) {
                logger.getLogger('warn').warn('%s => url: %s', err.message, req.url)
                resp.send(BizResult.bizFail(err));
                //其他异常
            } else {
                //记录异常日志
                logger.getLogger().error('系统异常 => url：%s,stack: %s', req.url, err.stack)

                resp.send(BizResult.fail(err.message))
            }

            resp.end();
        })
    }
}

module.exports = GlobalExceptionHandler
