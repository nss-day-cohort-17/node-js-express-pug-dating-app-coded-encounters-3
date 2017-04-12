const { Router } = require('express');
const router = Router();


router.use(require('./create-profile'));
router.use(require('./homepage'));
router.use(require('./login'));
router.use(require('./logout'));
router.use(require('./myProfile'));


module.exports = router;
