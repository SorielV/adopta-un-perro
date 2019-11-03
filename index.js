
const express = require("express");
const passport = require("passport");

const app = express();

app.use(express.json()); //why? : https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json

app.set('view engine', 'ejs');

require('./utilities/mongodb')(mongoose); //conect to mongoDB
require('./utilities/pug')(app, express); //using pug
require('./utilities/passport')(passport); //using pasport

app.use("/", require("./rutes/core")) //main domains
app.use("/header", require("./rutes/header")) //main domains
app.use("/login", require("./rutes/login")) //main domains
app.use("/perrera", require("./rutes/perrera")) //main domains
app.use("/usuario", require("./rutes/usuario")) //main domains
app.use("/api", require("./rutes/api.js")) //api domains


const port = process.env.PORT || "8000";
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
