//const express = require('express');
const mongoose = require('mongoose');
var Ambassador = require('../models/ambassador');

exports.getAmbassador = (req, res,next) => {
  Ambassador.find()
  .then(result => {
    res.render('ambassador', {
      studs: result,
      viewTitle: 'Admin Students',
      path: '/ambassador'
    });
  })
  // .catch(err => console.log(err));
  };

exports.getAddAmbassador = (req, res, next) => {
  res.render('ambassador', {
    pageTitle: 'Add Ambassador',
    path: '/ambassador',
    editing: false,
    hasError: false,
    errorMessage: null,
    validationErrors: []
  });
};

exports.postAddAmbassador = (req, res, next) => {
    const fullname = req.body.fullname;
    console.log(fullname);
    const email = req.body.email;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const country = req.body.country;
    const city = req.body.city;
    const facebook = req.body.facebook;
    const twitter = req.body.twitter;
    const address = req.body.address;
    
    const ambassador = new Ambassador({
      // _id: new mongoose.Types.ObjectId('5badf72403fd8b5be0366e81'),
      fullname, email, phone, gender, country,city, facebook,twitter,address,
    });
    ambassador
      .save()
      .then(result => {
        // console.log(result);
        console.log('Created Ambassador');
        res.redirect('/ambassadors');
      })
      
        return res.status(422).render('ambassador', {
          pageTitle: 'Register As Ambassador',
          path: '/ambassador',
          editing: false,
          hasError: true,
          validationErrors: []
        }); 
      
  };
