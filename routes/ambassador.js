const path = require('path');
const express = require('express');
const ambassador = require('../controllers/ambassador');

//const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/ambassador', ambassador.getAmbassador);

router.post('/ambassador', ambassador.postAddAmbassador);

// router.get('/about/index', about.getAbout);

// router.get('/service/index', service.getService);

// router.get('/contact/index', contact.getContact);

// router.get('/team/index', team.getTeam);

module.exports = router;
