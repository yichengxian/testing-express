const express = require(`express`);
const router = express.Router();
const solveController = require('../../controller/solve/SolveController');

/**
 *  getMakeId router
 */
router.get('/getMakeId', async (req, resp) => {
    const query = req.query;

    const subjectId = query.subjectId;
    const result = await solveController.getMakeId(subjectId);
    //send body
    resp.send(result);
});
/**
 * getAllExercise router
 */
router.get('/getAllExercise', async (req, resp) => {
    const query = req.query;
    const makeId = query.makeId;
    const result = await solveController.getAllExercise(makeId);
    resp.send(result);
})
/**
 *  makeExercise router
 */
router.post('/makeExercise', async (req, resp) => {
    const body = req.body;
    const makeId = body.makeId;
    const answerId = Number(body.answerId);
    const result = await solveController.makeExercise(makeId, answerId);
    resp.send(result);
})


/**
 *  endExercise router
 */
router.post('/endExercise', async (req, resp) => {
    const body = req.body;
    const makeId = body.makeId;

    const result = await solveController.endExercise(makeId);
    resp.send(result);
})


module.exports = router;
