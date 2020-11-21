const redisTemplate = require('../redis/RedisTemplate');
const RedisKeyConstant = require("../constant/RedisKeyConstant");
const clientUtil = require('../util/ClientUtil');
const BaseResultCode = require("../api/BaseResultCode");
const BizException = require("../exception/BizException");

/**
 * @author ycx
 * @description 请求配置
 */
class HttpConfig {

    /**
     * http 请求配置
     * @author ycx
     * @param req {Request}
     * @param resp {Response}
     * @param next
     */
    static async handler(req,resp,next){
        //设置响应头
        resp.setHeader('Content-Type','application/json');

        const keyConstant = RedisKeyConstant.SYS_REQ_LOCK_KEY;
        const clientIp = clientUtil.getClientIp(req);
        const key = keyConstant.getKey(clientIp,req.url,req.baseUrl,req.originalUrl);

     /*
        const keyConstant = RedisKeyConstant.SYS_REQ_LOCK_KEY;
        const clientIp = clientUtil.getClientIp(req);
        const key = keyConstant.getKey(clientIp,req.url,req.baseUrl,req.originalUrl);
        const b = await redisTemplate.setNx(key,clientIp,keyConstant.expire);
        //
        if (!b){
            throw new BizException(BaseResultCode.API_BUSY);
        }*/
        next();
    }

}

module.exports =HttpConfig
