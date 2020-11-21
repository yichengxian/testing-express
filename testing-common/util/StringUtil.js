/**
 * @author ycx
 * @description 字符串工具类
 * look more <link>https://gitee.com/yichengxian/js-tool/blob/master/core/util/StringUtil.js<link>
 */
class StringUtil{

    /**
     * 是不是空的
     * @param str {String}
     */
    static isEmpty(str){
        return null === str || undefined === str || 0 === str.length;
    }

    /**
     * 不是空的
     * @param str {String}
     */
    static isNotEmpty(str){
        return !this.isEmpty(str);
    }
}

module.exports = StringUtil
