const Router = require('express');
const noteController = require('../Controllers/note.controller');

const router = new Router();

router.post('/notes', noteController.add);
router.get('/notes', noteController.getAll);
router.get('/notes/:id', noteController.getOne);
router.delete('/notes/:id', noteController.remove);
router.patch('/notes/:id', noteController.edit);
router.get('/notes/stats', noteController.getStats);
router.post('/notes/archive/:id', noteController.changeActiveStatus);

module.exports = router;