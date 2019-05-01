const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
//const passport = require('passport');

const session = require('express-session');
//const {ensureAuthenticated} = require('./helpers/auth');


//Initialize Express
const app = express();


//Routes
const users = require('./routes/users');

//DB config
const db = require('./config/database');

//Mongoose promise
mongoose.Promise = global.Promise;

//Connect to mongoose
mongoose.connect(db.mongoURI , {
  useNewUrlParser: true
}).then(()=>{
  console.log('MongoDB connected..')
}).catch(err => console.log(err));

const User = mongoose.model('users');

/* BODY PARSE MIDDLE WARE */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', "http://localhost:4200");
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//session middle ware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true

}));

//Passport Middleware
//app.use(passport.initialize());
//app.use(passport.session());


// User Routes
app.use('/users', users);





const port = process.env.PORT || 5000;




app.listen(port, () =>{

  console.log(`Server running on port ${port}`);

});
