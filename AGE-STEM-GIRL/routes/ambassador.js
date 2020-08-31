const path = require('path');
const express = require('express');
const ambassador = require('../controllers/ambassador');

//const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/ambassador/ambassadors', ambassador.getAmbassadors);

router.get('/ambassador/add-ambassador', ambassador.getAddAmbassadors);

router.post('/add-ambassador', ambassador.postAddAmbassador);

 router.get('/ambassador/edit-ambassador/:ambassadorId', ambassador.getEditAmbassador);

 router.post('/ambassador/edit-ambassador', ambassador.postEditAmbassador);

// router.get('/contact/index', contact.getContact);

// router.get('/team/index', team.getTeam);

module.exports = router;
