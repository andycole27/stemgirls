const fs = require('fs');
const path = require('path');
 const express = require('express');

const Mentor = require('../models/mentor');

//getting the ambassador
exports.getMentors = (req, res, next) => {
  Mentor.find()
  .then(mentor => {
    res.render('mentor/mentors', {
      studs: mentor,
      pageTitle: 'Become A Mentor',
      path: '/mentor/mentors',
      editing: false
    });
  })
  };
  exports.getAddMentors = (req, res, next) => {
    Mentor.find()
    .then(mentor => {
      res.render('mentor/add-mentor', {
        studs: mentor,
        pageTitle: 'Become A Mentor',
        path: '/mentor/add-mentor',
        editing: false
      });
    })
    };
// Ambassador posting
exports.postAddMentor = (req, res, next) => { 
  const fullname = req.body.fullname;
  const email = req.body.email;
  const location = req.body.location;
  const phone = req.body.phone;
  const age = req.body.age;
  const mentor = new Mentor({
    fullname: fullname,
    email: email,
    location: location,
    phone: phone,
    age: age,
  });
  mentor.save()
    .then(result => {
      console.log('Created Mentor');
      res.redirect('/confirmation-message');
    })
    .catch(err => {
      console.log(err);
    });
};
//getting the editing info
exports.getEditMentor = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/index');
  }
  const menId = req.params.mentorlId;
  Mentor.findById(menId)
    .then(mentor => {
      if (!mentor) {
        return res.redirect('/index');
      }
      res.render('mentor/edit-mentor', {
        pageTitle: 'Edit Mentor',
        path: '/mentor/edit-mentor',
        editing: editMode,
        mentor: mentor
      });
    })
    .catch(err => console.log(err));
};
// Ambassador editting posting
exports.postEditMentor = (req, res, next) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const location = req.body.location;
  const phone = req.body.phone;
  const age = req.body.age;
  Mentor.findById(menId)
    .then(mentor => {
      mentor.fullname = updatedFullname;
      mentor.email = updatedEmail;
      mentor.location = updatedLocation;
      mentor.phone = updatedPhone;
      mentor.age = updatedAge;
      return mentor.save();
    })
    .then(result => {
      console.log('UPDATED mentor!');
      res.redirect('/confirmation-message');
    })
    .catch(err => console.log(err));
};
