var express = require('express');
var passport = require('passport');
var router = express.Router();


//home screen
router.get("/", (req, res) => {
    res.render("home", { title: "home" });
});


router.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

// process the signup form
app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

// process the login form TODO:
router.post('/login');

// LOGIN
router.get('/login', function (req, res) {
    // show the login form

    // render the page and pass in any flash data if it exists
    res.render('login', { title: "home" });
});

// SIGNUP
router.get('/signup', function (req, res) {
    // show the signup form

    // render the page and pass in any flash data if it exists
    res.render('signup', { title: "home" });
});

// PROFILE SECTION
// protected, have to be logged in. with middleware to verify if isLoggedIn
router.get('/profile', isLoggedIn, function (req, res) {
    res.render('profile.pug', { user: req.user });
});

// LOGOUT
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}



module.exports = router