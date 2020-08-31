const fs = require('fs');
const path = require('path');
 const express = require('express');

const Ambassador = require('../models/ambassador');

//getting the ambassador
exports.getAmbassadors = (req, res, next) => {
  Ambassador.find()
  .then(ambassador => {
    res.render('ambassador/ambassadors', {
      studs: ambassador,
      pageTitle: 'STEM Girls: Become an Ambassador.',
      path: '/ambassador/ambassadors',
      editing: false
    });
  })
  };
  exports.getAddAmbassadors = (req, res, next) => {
    Ambassador.find()
    .then(ambassador => {
      res.render('ambassador/add-ambassador', {
        studs: ambassador,
        pageTitle: 'STEM Girls: Become an Ambassador.',
        path: '/ambassador/add-ambassador',
        editing: false
      });
    })
    };
// Ambassador posting
exports.postAddAmbassador = (req, res, next) => { 
  const fullname = req.body.fullname;
  const email = req.body.email;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const country = req.body.country;
  const city = req.body.city;
  const facebook = req.body.facebook;
  const twitter = req.body.twitter;
  const address = req.body.address;
  const ambassador = new Ambassador({
    fullname: fullname,
    email: email,
    phone: phone,
    gender: gender,
    country: country,
    city: city,
    facebook: facebook,
    twitter: twitter,
    address: address,
  });
  ambassador.save()
    .then(result => {
      console.log('Created Ambassador');
      res.redirect('/confirmation-message');
    })
    .catch(err => {
      console.log(err);
    });
};
//getting the editing info
exports.getEditAmbassador = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/index');
  }
  const ambaId = req.params.ambassadorId;
  Ambassador.findById(ambaId)
    .then(ambassador => {
      if (!ambassador) {
        return res.redirect('/index');
      }
      res.render('ambassador/edit-ambassador', {
        pageTitle: 'Edit Ambassador',
        path: '/admin/edit-ambassador',
        editing: editMode,
        ambassador: ambassador
      });
    })
    .catch(err => console.log(err));
};
// Ambassador editting posting
exports.postEditAmbassador = (req, res, next) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const country = req.body.country;
  const city = req.body.city;
  const facebook = req.body.facebook;
  const twitter = req.body.twitter;
  const address = req.body.address;
  Ambassador.findById(ambaId)
    .then(ambassador => {
      ambassador.fullname = updatedFullname;
      ambassador.email = updatedEmail;
      ambassador.phone = updatedPhone;
      ambassador.gender = updatedGender;
      ambassador.country = updatedCountry;
      ambassador.city = updatedCity;
      ambassador.facebook = updatedFacebook;
      ambassador.twitter = updatedTwitter;
      ambassador.address = updatedAddress;
      return ambassador.save();
    })
    .then(result => {
      console.log('UPDATED Ambassador!');
      res.redirect('/confirmation-message');
    })
    .catch(err => console.log(err));
};
