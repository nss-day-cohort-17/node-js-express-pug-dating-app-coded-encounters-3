const { Router } = require('express');
const { show } = require('../controllers/loginCtrl');
const router = Router();


router.get('/login', show);
// router.post('/login', methodToAddInputs)


module.exports = router;
