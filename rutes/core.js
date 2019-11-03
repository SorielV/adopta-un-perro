var express = require('express');
var passport = require('passport');
var router = express.Router();


//home screen
router.get("/", (req, res) => {
    res.render("home.ejs");
});
router.get('/home', (req, res) => {
    res.redirect("/");
});

// LOGOUT
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});


// LOGIN
router.get('/login', (req, res) => {
    // show the login form

    // render the page and pass in any flash data if it exists
    res.render('login', { title: "home" });
});

// PROFILE SECTION
// protected, have to be logged in. with middleware to verify if isLoggedIn
router.get('/profile', (req, res) => {
    res.render('profile.pug', { user: req.user });
});


module.exports = router