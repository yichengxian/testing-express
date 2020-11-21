const BaseResultCode = require("../../testing-common/api/BaseResultCode");

/**
 *  业务异常code 继承业务code
 */
class BizResultCode extends BaseResultCode {

    /*    constructor(code,desc) {
            super(code,desc);
        }*/

    //业务
    //用户校验层 10-系统;10-业务 001-业务下哪个异常
    static BIZ_TOKEN_NOT_FOUNT = new BizResultCode(1010001, 'token 不能为空');
    static BIZ_USER_NOT_FOUNT = new BizResultCode(1010002, '用户不存在或已被禁用');

    //做题校验层 11-做题
    static BIZ_MAKE_ID_NOT_FOUNT = new BizResultCode(1011001, '没有相应的做题序列');
    static BIZ_QUESTION_NOT_FOUNT = new BizResultCode(1011002, '没有找到对应的评测问题');
    static BIZ_SUBJECT_NOT_FOUNT = new BizResultCode(1011003, '没有找到对应的专题评测');
    static BIZ_ANSWER_NOT_FOUNT = new BizResultCode(1011004, '没有找到对应的答案选项');
    static BIZ_ANSWER_NOT_BELONG_SUBJECT = new BizResultCode(1011005, '答案与专题不成立');
    static  BIZ_END_EXERCISE_UNUSUAL = new BizResultCode(1011006, '结束答题成绩异常');
    static BIZ_REPEAT_EXERCISE = new BizResultCode(1011007, '重复答题');
    static BIZ_SCORE_RESULT_NOT_FOUNT = new BizResultCode(1011008,'结果未配置');


}

module.exports = BizResultCode
