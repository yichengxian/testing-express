const mysqlTemplate = require('../../../../testing-common/mysql/MysqlTemplate');
const ScoreModel = require('../../../../testing-models/models/score_result_info');
const Sequelize = require('sequelize');
const BizResultCode = require("../../../result/BizResultCode");
const BizException = require("../../../../testing-common/exception/BizException");
const Op = Sequelize.Op

/**
 * 成绩结果查询
 */
class ScoreService {

    /**
     * 根据分数查出一个表 如果配错，配错的人自己处理
     * @param subjectId {number} 评测id
     * @param score {number}
     * @return {Promise<*>}
     */
    static async getScoreResult(subjectId, score) {
        let infoDo = await mysqlTemplate.findOne(ScoreModel, {
            attributes: ['img'],
            where: {
                'evaluateId': subjectId,
                'minScore': {[Op.lte]: score},
                'maxScore': {[Op.gt]: score}
            }
        });
        if (null == infoDo) {
            infoDo = await mysqlTemplate.findOne(ScoreModel, {
                attributes: ['img'],
                where: {
                    'evaluateId': subjectId,
                },
                order:[]
            });
        }

        if (null === infoDo) {
            console.error('数据配置异常，')
            throw new BizException(BizResultCode.BIZ_SCORE_RESULT_NOT_FOUNT);
        }
        return infoDo;
    }


}

module.exports = ScoreService
