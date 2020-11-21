const mysqlTemplate = require('../../../../testing-common/mysql/MysqlTemplate');
const EvaluateModel = require('../../../../testing-models/models/evaluate_info');
const questionService = require('../../service/questions/QuestionService');

/**
 *
 */
class SubjectService {

    /**
     * 查询所有主题
     * @return {Promise}
     */
    static async findAllSubject() {
        //
        let infoList = await mysqlTemplate.findAll(EvaluateModel, {
            attributes: ['id', 'title', 'description', 'icon', 'img', 'descImg', 'num', 'shareIcon', 'lastIcon', 'favorableRate', 'type', 'data'],
            where: {
                'status': 1,
                'is_delete': 0,
            },
            order: [['sort', 'ASC']],
        });

        for (const item of infoList) {
            item.dataValues.questionCount = await questionService.countBySubjectId(item.id);
        }
        return infoList;
    }

    /**
     *  通过id 查询
     * @param id
     * @return {Promise<*>}
     */
    static async findById(id) {
        let info = await mysqlTemplate.findById(EvaluateModel, id, {
            attributes: ['id', 'title', 'description', 'icon', 'img', 'descImg', 'num', 'shareIcon', 'lastIcon', 'favorableRate', 'type', 'data', 'color'],
        });
        //
        if (null !== info) {
            info.dataValues.questionCount = await questionService.countBySubjectId(info.id);

        }
        return info;
    }


}

module.exports = SubjectService
