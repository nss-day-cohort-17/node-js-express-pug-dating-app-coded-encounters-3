const { Router } = require('express');
const { show } = require('../controllers/sessionCtrl');
const {User, returnCurrentUser } = require('../models/user')
const router = Router();


router.get('/myProfile', show);
// router.post('/myProfile', methodTolike/disklike);
router.post('/myProfile', returnCurrentUser);


module.exports = router;
