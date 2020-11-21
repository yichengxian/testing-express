const stringUtil = require('../../../../testing-common/util/StringUtil');
const ResultCode = require('../../../result/BizResultCode');
const BizException = require("../../../../testing-common/exception/BizException");
const solveService = require('../../service/solve/SolveService');
const BizResult = require("../../../../testing-common/api/BizResult");

/**
 * @author ycx
 * @description 做题
 */
class SolveController {


    /**
     * 获取 makeId
     * @param subjectId
     * @return {Promise<BizResult>}
     */
    static async getMakeId(subjectId) {
        //参数有误
        if (Number.isNaN(subjectId)) {
           return BizResult.validateFailed('subjectId')
        }
        const makeIdStr = await solveService.getMakeId(subjectId);

        return BizResult.success(makeIdStr);

    }

    /**
     * 做练习 => 答题
     * @param makeId
     * @param answerId{ number}
     * @return {Promise<void>}
     */
    static async makeExercise(makeId, answerId) {

        if (stringUtil.isEmpty(makeId)) {
            throw new BizException(ResultCode.BIZ_MAKE_ID_NOT_FOUNT)
        }
        if (Number.isNaN(answerId)){
            return BizResult.validateFailed('answerId')
        }

        await solveService.makeExercise(makeId, answerId);

        return BizResult.success();
    }

    /**
     * 获取所有练习包括选项
     * @param makeId
     * @return {Promise<BizResult>}
     */
    static async getAllExercise(makeId) {
        //
        if (stringUtil.isEmpty(makeId)) {
            throw new BizException(ResultCode.BIZ_MAKE_ID_NOT_FOUNT);
        }

        const questionDos = await solveService.getAllExercise(makeId);
        return BizResult.success(questionDos);
    }

    /**
     * 结束答题
     * @param makeId
     * @return {Promise<BizResult>}
     */
    static async endExercise(makeId) {

        if (stringUtil.isEmpty(makeId)) {
            return BizResult.validateFailed('makeId');
        }

        const scoreResult = await solveService.endExercise(makeId);

        return BizResult.success(scoreResult);
    }
}

module.exports =SolveController
