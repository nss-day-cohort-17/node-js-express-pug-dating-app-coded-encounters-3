const { Router } = require('express');
const { show } = require('../controllers/loginCtrl');
const { checkuser } = require('../controllers/sessionCtrl');
const router = Router();


router.get('/login', show);
router.post('/login', checkuser)


module.exports = router;
