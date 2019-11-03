var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("home", { title: "home" });
});

router.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

// LOGIN
router.get('/login', function (req, res) {
    // show the login form

    // render the page and pass in any flash data if it exists
    res.render('login', { title: "home" });
});

// process the login form TODO:
router.post('/login');

// SIGNUP
router.get('/signup', function (req, res) {
    // show the signup form

    // render the page and pass in any flash data if it exists
    res.render('signup', { title: "home" });
});

// process the signup form TODO:
router.post('/signup');

// PROFILE SECTION
// protected, have to be logged in
// we will use route middleware to verify this (the isLoggedIn function)
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