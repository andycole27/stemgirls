const path = require('path');
const express = require('express');
const mentor = require('../controllers/mentor');

//const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/mentor/mentors', mentor.getMentors);

router.get('/mentor/add-mentor', mentor.getAddMentors);

router.post('/add-mentor', mentor.postAddMentor);

 router.get('/mentor/edit-mentor/:mentorId', mentor.getEditMentor);

 router.post('/mentor/edit-mentor', mentor.postEditMentor);

// router.get('/contact/index', contact.getContact);

// router.get('/team/index', team.getTeam);

module.exports = router;
