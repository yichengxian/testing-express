const subjectService = require('../../service/subject/SubjectService');
const BizResult = require("../../../../testing-common/api/BizResult");

/**
 * @author ycx
 *
 */
class SubjectController {

    /**
     * 查询所有评测专题
     * @return {BizResult<Array>}
     */
    static async findAllSubject() {
        //
        let subjectInfo = await subjectService.findAllSubject();

        return BizResult.success(subjectInfo);
    }

    /**
     * 通过评测专题id 查询评测详细
     * @param subjectId
     * @return {Promise<void>}
     */
    static async findSubject(subjectId) {
        //
        if (Number.isNaN(subjectId)) {
            //
             return BizResult.validateFailed('subjectId');
        }
        let subjectInfo = await subjectService.findById(subjectId);

        return BizResult.success(subjectInfo);
    }

}

module.exports = SubjectController
