const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
var app = express();
var session = require('express-session');
const bodyParser = require('body-parser');
//require('./models/mongodb');
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
const csrf = require('csurf');
const stemgirl = require('./controllers/stemgirl');
const homeRoutes = require('./routes/home');
const ambassadorRoutes = require('./routes/ambassador');
app.use(homeRoutes);
app.use(ambassadorRoutes);
const error = require('./controllers/error');
//  //local imports
const isAuth = require('./middleware/is-auth');
app.use('http://localhost:3000/images', express.static(path.join(__dirname, 'images')));
const User = require('./models/user');
// app.use((req, res, next) => {
//   //res.locals.isAuthenticated = req.session.isLoggedIn;
//   res.locals.csrfToken = req.csrfToken();
//   next();
// });
app.use(flash());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


const MONGODB_URI = 'mongodb://localhost:27017/stem?connectTimeoutMS=10';
 const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
   store:store
  })
 );
 //Configuring Express middleware for the handlebars
app.set('views', path.join(__dirname, '/views/'));


app.set('view engine', 'ejs');
 //const csrfProtection = csrf();
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 27017;
mongoose
  .connect(MONGODB_URI,{ useUnifiedTopology: true },(err) => {
    if (!err) {
    console.log('Successfully Established Connection with MongoDB')//sucess message
    }
    else {
    console.log('Failed to Establish Connection with MongoDB with Error: '+ err)//unsucessful message
    }
  })
  .then(result => {
    app.listen(3000, () => console.log(`Listening on port ${port}..`));
  })
  .catch(err => {
    console.log(err);
  });
 
 



