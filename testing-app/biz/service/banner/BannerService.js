const mysqlTemplate = require('../../../../testing-common/mysql/MysqlTemplate');
const BannerInfoModel = require('../../../../testing-models/models/banner_info');

/**
 * @author ycx
 * @description banner service
 */
class BannerService {

    /**
     * @author ycx
     * @description  查询banner
     */
    static async findBanner() {

        return await mysqlTemplate.findAll(BannerInfoModel, {
            attributes: ['img', 'type', 'data'],
            where: {
                'is_delete': 0
            },
            order: [['sort', 'ASC']],
        });
    }
}

module.exports = BannerService
