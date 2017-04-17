'use strict';

const { Router } = require('express');

const { show, create, currentuserCreate } = require('../controllers/create-profileCtrl');

const router = Router();

router.get('/create-profile', show);

router.post('/create-profile',create);
// router.post('/create-profile',create);

module.exports = router;
