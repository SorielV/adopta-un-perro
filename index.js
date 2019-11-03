
const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();

app.use(express.json()); //why? : https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json

app.set('view engine', 'ejs');

require('./utilities/mongodb')(mongoose); //conect to mongoDB
require('./utilities/pug')(app, express); //using pug
require('./utilities/passport')(passport); //using pasport


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

app.use("/", /*isLoggedIn,*/ require("./rutes/core")) //main domains
app.use("/api", require("./rutes/api.js")) //api domains


const port = process.env.PORT || "8000";
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
