

const express = require(`express`);
const router = express.Router();
const subjectController = require('../../controller/subject/SubjectController');

/**
 *  getMakeId router
 */
router.get('/findAllSubject', async (req, resp) => {


    const result = await subjectController.findAllSubject();
    //send body
    resp.send(result);
});

/**
 *
 */
router.get('/findSubject',async (req,resp) =>{

    const query = req.query;

    const subjectId = query.subjectId;


    const result = await subjectController.findSubject(subjectId);
    //send body
    resp.send(result);
})
module.exports = router;
