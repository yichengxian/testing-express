const mysqlTemplate = require('../../../../testing-common/mysql/MysqlTemplate');
const AnswerModel = require('../../../../testing-models/models/answer_info');

/**
 * @author ycx
 * @description 答案选项 服务层
 */
class AnswerService {

    /**
     * 查询id
     * @param questionsId 问题
     * @return {Promise<Model>}
     */
    static async findAll(questionsId) {
        return await mysqlTemplate.findAll(AnswerModel, {
            attributes: ['id', 'content'],
            where: {
                'questionId': questionsId
            },
            order: [['sort', 'ASC']]
        })

    }

    /**
     * 通过id查询这个答案
     * @param id
     * @return {Promise<*>}
     */
    static async findById(id) {
        return await mysqlTemplate.findById(AnswerModel,
            id,
            {
                attributes: ['id', 'content', 'grade', 'questionId']
            })
    }


}

module.exports = AnswerService
