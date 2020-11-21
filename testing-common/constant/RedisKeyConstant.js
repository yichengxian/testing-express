/**
 * @author ycx
 * @description redis key 常量
 */
class RedisKeyConstant {

    static SYS_REQ_LOCK_KEY = new RedisKeyConstant('system','lock',1,'接口避免重复请求');

    static SOLVE_ID_KEY = new RedisKeyConstant('solve','id',1800,'生成solve id的存值');

    static MAKE_EXERCISE_KEY = new RedisKeyConstant('exercise','make',900,'做题时候给做过的题目打标记的key');

    static EXERCISE_GRADE_KEY = new RedisKeyConstant('exercise','grade',1800,'分数记录的redis')



    /**
     * 包名
     * @type {string}
     */
    packageName;

    /**
     * 前缀
     */
    prefix;
    /**
     * 失效时间
     * @type {number}
     */
    expire;
    /**
     * 描述
     * @type {string}
     */
     desc;


    /**
     *
     * @param packageName {string}
     * @param prefix {string}
     * @param expire {number};
     * @param desc {string}
     */
    constructor(packageName,prefix, expire,desc) {
        this.packageName = packageName;
        this.prefix =prefix;
        this.expire =expire;
        this.desc = desc;
    }

    /**
     * 传值key
     * @param keys {string}
     */
     getKey(...keys) {

       return  this.packageName.concat(':',this.prefix,'_').concat(keys).replaceAll(',','_') ;
    }


}

module.exports = RedisKeyConstant

