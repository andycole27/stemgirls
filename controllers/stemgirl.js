const fs = require('fs');
const path = require('path');
 const express = require('express');

const Stemgirl = require('../models/stemgirl');

//getting the ambassador
exports.getStemgirls = (req, res, next) => {
  Stemgirl.find()
  .then(stemgirl => {
    res.render('stemgirl/stemgirls', {
      studs: stemgirl,
      pageTitle: 'Become A STEM Girl',
      path: '/stemgirl/stemgirls',
      editing: false
    });
  })
  };
  exports.getAddStemgirls = (req, res, next) => {
    Stemgirl.find()
    .then(stemgirl => {
      res.render('stemgirl/add-stemgirl', {
        studs: stemgirl,
        pageTitle: 'Become A STEM Girl',
        path: '/stemgirl/add-stemgirl',
        editing: false
      });
    })
    };
// Ambassador posting
exports.postAddStemgirl = (req, res, next) => { 
  const fullname = req.body.fullname;
  const email = req.body.email;
  const location = req.body.location;
  const phone = req.body.phone;
  const age = req.body.age;
  const school = req.body.school;
  const grade = req.body.grade;
  const stemgirl = new Stemgirl({
    fullname: fullname,
    email: email,
    location: location,
    phone: phone,
    age: age,
    school: school,
    grade: grade,
  });
  stemgirl.save()
    .then(result => {
      console.log('Created Stemgirl');
      res.redirect('/confirmation-message');
    })
    .catch(err => {
      console.log(err);
    });
};
//getting the editing info
exports.getEditStemgirl = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/index');
  }
  const stemId = req.params.stemgirlId;
  Stemgirl.findById(stemId)
    .then(stemgirl => {
      if (!stemgirl) {
        return res.redirect('/index');
      }
      res.render('stemgirl/edit-stemgirl', {
        pageTitle: 'Edit Stemgirl',
        path: '/stemgirl/edit-stemgirl',
        editing: editMode,
        stemgirl: stemgirl
      });
    })
    .catch(err => console.log(err));
};
// Ambassador editting posting
exports.postEditStemgirl = (req, res, next) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const location = req.body.location;
  const phone = req.body.phone;
  const age = req.body.age;
  const school = req.body.school;
  const grade = req.body.grade;
  Stemgirl.findById(stemId)
    .then(stemgirl => {
      stemgirl.fullname = updatedFullname;
      stemgirl.email = updatedEmail;
      stemgirl.location = updatedLocation;
      stemgirl.phone = updatedPhone;
      stemgirl.age = updatedAge;
      stemgirl.school = updatedSchool;
      stemgirl.grade = updatedGrade;
      return stemgirl.save();
    })
    .then(result => {
      console.log('UPDATED Stemgirl!');
      res.redirect('/confirmation-message');
    })
    .catch(err => console.log(err));
};
