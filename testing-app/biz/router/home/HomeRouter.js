const express = require(`express`);
const router = express.Router();
const homeController = require('../../controller/home/HomeController');

/**
 * index router
 */
router.get('/',async (req,res)=>{
    const data = homeController.index();
    //send body
    res.send(data);
});

module.exports = router;
