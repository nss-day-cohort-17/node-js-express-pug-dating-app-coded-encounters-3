const { Router } = require('express');
const { show } = require('../controllers/sessionCtrl');
const router = Router();


router.get('/myProfile', show);
// router.post('/myProfile', methodTolike/disklike);



module.exports = router;
