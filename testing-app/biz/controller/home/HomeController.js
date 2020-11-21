const homeService = require('../../service/home/HomeService');
const BizResult = require("../../../../testing-common/api/BizResult");

/**
 * @author ycx
 * @description home
 */
class HomeController {

    /**
     * index api
     */
    static index() {
        //throw new Error('111111');
        const str = homeService.index();
        return BizResult.success(str);
    }
}

module.exports = HomeController
