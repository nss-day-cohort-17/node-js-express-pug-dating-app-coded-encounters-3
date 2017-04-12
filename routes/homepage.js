const { Router } = require('express');
const { show } = require('../controllers/homepageCtrl');
const router = Router();


router.get('/homepage', show);
// router.post('/homepage', methodToAdd4questions)


module.exports = router;
