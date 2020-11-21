const snowflakeFactory = require('../../../util/SnowflakeFactory');
const redisTemplate = require('../../../../testing-common/redis/RedisTemplate');
const RedisKeyConstant = require("../../../../testing-common/constant/RedisKeyConstant");
const subjectService = require('../../service/subject/SubjectService');
const BizException = require("../../../../testing-common/exception/BizException");
const BizResultCode = require("../../../result/BizResultCode");
const questionService = require('../questions/QuestionService');
const answerService = require('../answer/AnswerService');
const ScoreService = require("../score/ScoreService");

/**
 * @author ycx
 * @description 答题业务逻辑
 */
class SolveService {

    /**
     * 获取一个答题序列来唯一标识这一次答题
     * @param subjectId {number} 专题id
     * todo 取名字
     */
    static async getMakeId(subjectId) {
        const subjectInfoDo = await subjectService.findById(subjectId);
        //没有找到专题
        if (null === subjectInfoDo) {
            throw new BizException(BizResultCode.BIZ_SUBJECT_NOT_FOUNT);
        }
        const keyConstant = RedisKeyConstant.SOLVE_ID_KEY;
        let makeId = snowflakeFactory.getSnowflake().nextId().toString();

        const key = keyConstant.getKey(makeId);

        await redisTemplate.set(key, subjectId, keyConstant.expire);
        return makeId;
    }

    /**
     * 获取所有练习包括选项
     * @param makeId 生成序列的id
     */
    static async getAllExercise(makeId) {
        const keyConstant = RedisKeyConstant.SOLVE_ID_KEY;
        const key = keyConstant.getKey(makeId);
        //获取评测专题
        const redisVal = await redisTemplate.get(key);
        if (null === redisVal) {
            throw new BizException(BizResultCode.BIZ_MAKE_ID_NOT_FOUNT);
        }
        //获取全部问题数组
        const questionInfoDos = await questionService.findAllQuestions(Number(redisVal));
        //循环遍历查询答案(todo 这里可以使用$in 优化rpc带来的性能问题，但是需要规避$in的个数)
        for (let i = 0; i < questionInfoDos.length; i++) {
            const questionId = questionInfoDos[i].dataValues.id;
            const answer = await answerService.findAll(questionId);
            //赋值对象
            questionInfoDos[i].dataValues.answer = answer;
        }
        //

        return questionInfoDos;
    }

    /**
     * 做练习
     * @param makeId {string} 评测id
     * @param answerId {number} 答案id
     * @return {Promise<void>}
     */
    static async makeExercise(makeId, answerId) {

        const keyConstant = RedisKeyConstant.SOLVE_ID_KEY;
        const key = keyConstant.getKey(makeId);
        //获取评测专题
        const redisVal = await redisTemplate.get(key);
        if (null === redisVal) {
            throw new BizException(BizResultCode.BIZ_MAKE_ID_NOT_FOUNT);
        }
        //获取选项
        const answerInfoDo = await answerService.findById(answerId);
        //答案不存在 不知道前端如何传的值
        if (null === answerInfoDo) {
            throw new BizException(BizResultCode.BIZ_ANSWER_NOT_FOUNT);
        }
        //获取问题
        const questionInfoDo = await questionService.findById(answerInfoDo.questionId);
        if (null === questionInfoDo) {
            //问题库不存在，该死！！！谁在这个时候改数据库(当然可以规避这个问题)
            throw new BizException(BizResultCode.BIZ_QUESTION_NOT_FOUNT);
        }

        if (questionInfoDo.evaluateId !== Number(redisVal)) {

            //两个不成立 说明这个答案不属于这个专题之内的 要么突然被改数据库 要么就是前端传值有误
            throw new BizException(BizResultCode.BIZ_ANSWER_NOT_BELONG_SUBJECT)
        }

        //把数据锁定，避免做过的题目再次被做(规避成绩计算问题)
        const makeExerciseKeyConstant = RedisKeyConstant.MAKE_EXERCISE_KEY;
        const makeKey = makeExerciseKeyConstant.getKey([makeId, answerId]);
        const flag = await redisTemplate.setNx(makeKey, answerId, makeExerciseKeyConstant.expire);
        if (!flag) {
            throw new BizException(BizResultCode.BIZ_REPEAT_EXERCISE)
        }


        //获取分数分数
        const exerciseGradeKey = RedisKeyConstant.EXERCISE_GRADE_KEY;
        const gradeKey = exerciseGradeKey.getKey(makeId);

        //把分数记录
        await redisTemplate.incrBy(gradeKey, answerInfoDo.grade, exerciseGradeKey.expire);


    }

    /**
     * 结束答题 =>结束练习
     * @param makeId
     * @return {Promise<*>}
     */
    static async endExercise(makeId) {


        const keyConstant = RedisKeyConstant.SOLVE_ID_KEY;
        const key = keyConstant.getKey(makeId);
        //获取评测专题
        const redisVal = await redisTemplate.get(key);
        if (null === redisVal) {
            throw new BizException(BizResultCode.BIZ_MAKE_ID_NOT_FOUNT);
        }

        //获取答题分数
        let num = await redisTemplate.get(RedisKeyConstant.EXERCISE_GRADE_KEY.getKey(makeId));

        //
        if (null === num || Number.isNaN(num = Number(num))) {
            throw new BizException(BizResultCode.BIZ_END_EXERCISE_UNUSUAL)
        }
        //根据分数得到相应的结果
        const scoreResult = await ScoreService.getScoreResult(Number(redisVal),num);

        //最后删除该评测分数不再记录
        await redisTemplate.del(key);
        return scoreResult;
    }

}

module.exports = SolveService


