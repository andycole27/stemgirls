const path = require('path');
const express = require('express');
const home = require('../controllers/home');
const about = require('../controllers/home');
const faqs = require('../controllers/home');
const message = require('../controllers/home');
//const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/index', home.getHomes);

 router.get('/about-us', about.getAbout);

 router.get('/FAQs', faqs.getFaqs);

router.get('/confirmation-message', message.getMessage);

// router.get('/team/index', team.getTeam);

module.exports = router;
