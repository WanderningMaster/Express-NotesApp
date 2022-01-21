const Router = require('express');
const noteController = require('../Controllers/note.controller');

const router = new Router();

router.post('/notes', noteController.add);
router.get('/notes', noteController.getAll);
router.delete('/notes/:id', noteController.remove);

module.exports = router;