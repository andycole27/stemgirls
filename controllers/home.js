const fs = require('fs');
const path = require('path');
 const express = require('express');
//const mongoose = require('mongoose');
//var router = express.Router();
const Home = require('../models/home');
const About = require('../models/home');
const Faqs = require('../models/home');
const Message = require('../models/home');
exports.getHomes = (req, res, next) => {
    Home.find()
    .then(home => {
      res.render('index', {
        studs: home,
        pageTitle: 'STEM Girl Home',
        path: '/index',
        //totalAmbassadors: totalAmbassadors
      });
    })
};
exports.getAbout = (req, res, next) => {
  About.find()
  .then(about => {
    res.render('about-us', {
      studs: about,
      //pageTitle: 'STEM Girl Home',
      path: '/about-us',
      //totalAmbassadors: totalAmbassadors
    });
  })
};
exports.getFaqs = (req, res, next) => {
  Faqs.find()
  .then(faqs => {
    res.render('FAQs', {
      studs: faqs,
     // pageTitle: 'STEM Girl Home',
      path: '/FAQs',
      //totalAmbassadors: totalAmbassadors
    });
  })
};
exports.getMessage = (req, res, next) => {
  Message.find()
  .then(message => {
    res.render('confirmation-message', {
      studs: message,
      pageTitle: 'Confirmation',
      path: '/confirmation-message',
      //totalAmbassadors: totalAmbassadors
    });
  })
};