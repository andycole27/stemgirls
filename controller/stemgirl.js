//Import the dependencies
const express = require('express');
const mongoose = require('mongoose');

var router = express.Router();
const isAuth = require('../middleware/is-auth');
var Stemgirl = require('../models/stemgirl');

////list all the students-tables
router.get('/edit-table', isAuth, (req, res,next) => {
Stemgirl.find()
.then(result => {
  res.render('admin/edit-table', {
    studs: result,
    viewTitle: 'Admin Students',
    path: '/edit-table'
  });
})
.catch(err => console.log(err));
});
////list all the students
router.get('/students', isAuth, (req, res,next) => {  
  Stemgirl.find()
    .then(result => {
      res.render('admin/students', {
        studs: result,
        viewTitle: 'Admin Students',
        path: '/admin/students'
      });
    })
    .catch(err => console.log(err));
    });
 
 
    //Router Controller for READ request
  router.get('/addstemgirl', isAuth, (req, res,next) => {
        res.render("admin/addstemgirl", {
        viewTitle: 'Insert a New Student',
        path: '/admin/addstemgirl',
        editing: false,
        hasError: false,
        errorMessage: null,
     });
    });
router.post('/addStudent', isAuth, (req, res) => {
//const imageUrl = req.file.path;
var stemgirl = new Stemgirl({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
       contact: req.body.contact,             
       placeofBirth: req.body.placeofBirth,
       religion: req.body.religion,
       address: req.body.address,
      email: req.body.email,
      imageUrl:'http://localhost:3000/images/' + req.body.image,
      userId: req.user,  
            });
              stemgirl
              .save()
              .then(result => {
                // console.log(result);
                console.log('Created Student');
                //console.log('req.imageUrl.path');
                
                res.redirect('/admin/students');
              })
              .catch(err => {
                console.log(err);
              });
          });
//finding the list of available students
router.get('/editStudent/:studentId', isAuth, (req, res,next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
    }
studentId = req.params.studentId;
      Student.findById(studentId)
      .then(student => {
        if (!student) {
          return res.redirect('/');
        }
        res.render('admin/editStudent', {
          viewTitle: 'Edit Student',
          path: '/admin/editStudent',
          editing: editMode,
          student: student
        });
      })
      .catch(err => console.log(err));
 });
  //posting the edited student    
  //deleting a student record
  router.get('/deletestudent/:id', isAuth, (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
    res.redirect('/admin/students');
    }
    else { console.log('Failed to Delete Course Details: ' + err); }
    });
    });     
    router.get('/detailStudent/:id', isAuth, (req, res) => {
      const studentId = req.params.studentId;
    Student.findById(studentId)
    .then(student => {
      res.render('admin/detailStudent', {
       student: student,
        viewTitle: 'student.studentName',
        path: '/students'
      });
    })
    .catch(err => console.log(err));
});
module.exports = router;