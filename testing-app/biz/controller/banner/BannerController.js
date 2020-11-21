const bannerService = require('../../service/banner/BannerService');
const BizResult = require("../../../../testing-common/api/BizResult");

/**
 * @author ycx
 * @description banner
 */
class BannerController {

    /**
     * find banner
     */
    static async findBanner() {
        const banner = await bannerService.findBanner();
        return BizResult.success(banner);
    }
}
module.exports = BannerController
