var express = require('express');
var passport = require('passport');
var Usuario = require("../models/usuario")
var router = express.Router();

//siggnup
router.post('/register', mustNotBeLoged, async (req, res) => {
    try {
        let usuario = new Usuario({
            nombre: req.body.name,
            contraHash: await bcrypt.hash(req.body.contra, 10),
            correo: req.body.correo,
        })
        await usuario.save();
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
});

//login
router.post('/login', mustNotBeLoged, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))

// ----------------------------------------------------------

//home screen
router.get("/", (req, res) => {
    if (req.isAuthenticated())
        true;
    else
        false;
    
    res.render("home.ejs");
});
router.get('/home', (req, res) => {
    res.redirect("/");
});

// login
router.get('/login', mustNotBeLoged, (req, res) => {
    res.render('login.ejs');
});

// logout
router.get('/logout', mustBeLogedIn, (req, res) => {
    req.logout();
    res.redirect('/');
});

// lomitos
router.get('/gallery', (req, res) => {
    res.sendFile("/lomitosGallery.html", { root: "views" });
});

// lomitos
router.get('/mygallery', (req, res) => {
    res.sendFile("/myGalleryLomitos.html", { root: "views" });
});

// myProfile
router.get('/myprofile', (req, res) => {
    res.render('myProfile.ejs');
});

// registro
router.get('/registro', (req, res) => {
    res.render('registro.ejs');
});

// ----------------------------------------------------------

// route middleware to make sure a user is logged in
function mustBeLogedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

function mustNotBeLoged(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        res.redirect('/');

    return next();
}

module.exports = router