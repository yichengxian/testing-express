const mysqlTemplate = require('../../../../testing-common/mysql/MysqlTemplate');
const QuestionsModel = require('../../../../testing-models/models/questions_info');

/**
 * @author ycx
 * @description 问题服务层
 */
class QuestionService {

    /**
     * 通过专题id查询所有问题
     * @param subjectId {BigInt}
     * @return {Promise<Array<QuestionsModel>>}
     */
    static async findAllQuestions(subjectId) {
        return await mysqlTemplate.findAll(QuestionsModel, {
            attributes: ['id', 'evaluateId', 'content'],
            where: {
                'evaluateId': subjectId,
                'isDelete':0
            },
            sort: [['sort', 'ASC']],

        });
    }

    /**
     * 通过问题id查找当前问题
     * @param id
     * @return {Promise<*>}
     */
    static async findById(id) {
        return await mysqlTemplate.findById(QuestionsModel, id,{
            attributes: ['id', 'evaluateId', 'content']
        });
    }

    static async countBySubjectId(subjectId) {
        return await mysqlTemplate.count(QuestionsModel,{
            where:{
                evaluateId: subjectId,
                isDelete: 0
            }
        })
    }


}

module.exports =QuestionService
