const path = require('path');
const express = require('express');
const stemgirl = require('../controllers/stemgirl');

//const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/stemgirl/stemgirls', stemgirl.getStemgirls);

router.get('/stemgirl/add-stemgirl', stemgirl.getAddStemgirls);

router.post('/add-stemgirl', stemgirl.postAddStemgirl);

 router.get('/stemgirl/edit-stemgirl/:stemgirlId', stemgirl.getEditStemgirl);

 router.post('/stemgirl/edit-stemgirl', stemgirl.postEditStemgirl);

// router.get('/contact/index', contact.getContact);

// router.get('/team/index', team.getTeam);

module.exports = router;
