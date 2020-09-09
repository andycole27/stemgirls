const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

//const errorController = require('./controllers/error');
//const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//const adminRoutes = require('./routes/admin');
const ambassadorRoutes = require('./routes/ambassador');
const homeRoutes = require('./routes/home');
const stemgirlRoutes = require('./routes/stemgirl');
const mentorRoutes = require('./routes/mentor');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById('5bab316ce0a7c75f783cb8a8')
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });

//app.use('/admin', adminRoutes);
app.use(ambassadorRoutes);
app.use(homeRoutes);
app.use(stemgirlRoutes);
app.use(mentorRoutes);
//app.use(errorController.get404);
//mongodb+srv://andycole:<password>@cluster0.ugulg.mongodb.net/<dbname>?retryWrites=true&w=majority
const MONGODB_URI = `mongodb+srv://andycole:vTV2kptDzhGE1874@cluster0.ugulg.mongodb.net/stem?retryWrites=true&w=majority`;
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
 


const port = process.env.PORT || 27017;
mongoose.connect(MONGODB_URI,{ useUnifiedTopology: true },(err) => {
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
