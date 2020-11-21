const express = require(`express`);
const router = express.Router();
const bannerController = require('../../controller/banner/BannerController');

/**
 * find banner
 */
router.get('/findBanner',async (req,res)=>{
    const data = await bannerController.findBanner();
    //send body
    res.send(data);
});

module.exports = router;
