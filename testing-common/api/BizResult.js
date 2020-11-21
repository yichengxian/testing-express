const BizResultCode = require('./BaseResultCode');
const loggerFactory = require('../logger/LoggerFactory');
/**
 * @author ycx
 * @description 统一返回结果
 */
class BizResult {
    /**
     * 返回code
     */
    code;
    /**
     * 返回消息
     */
    msg;
    /**
     * 返回数据
     */
    data;
    /**
     * 返回时间
     */
    time;

    /**
     *
     * @param code {number} 返回code
     * @param msg {string} 返回消息
     * @param data {any} 返回具体对象
     */
    constructor(code, msg, data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
        this.time = Date.now();
    }

    /**
     * 成功
     * @param data
     * @return {BizResult}
     */
    static success(data) {

        return new BizResult(BizResultCode.SUCCESS.code, BizResultCode.SUCCESS.desc, data);
    }

    /**
     * 失败
     */
    static fail(errData) {
        return new BizResult(BizResultCode.FAILED.code, BizResultCode.FAILED.desc, errData);
    }

    /**
     * 参数校验失败
     */
    static validateFailed(param) {

        //loggerFactory.getLogger('warn').warn('参数校验失败：%s',param);

        return new BizResult(BizResultCode.VALIDATE_FAILED.code, BizResultCode.VALIDATE_FAILED.desc, param);
    }


    /**
     * 用户异常
     */
    static userFailed(){
        //xxx
    }

    /**
     * 拦截到的业务异常
     * @param bizException
     */
    static bizFail(bizException) {
        return new BizResult(bizException.code, bizException.msg, null);
    }


}

module.exports = BizResult




