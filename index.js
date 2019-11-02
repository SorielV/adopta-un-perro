const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json()); //why? : https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json

app.use("/", require("./rutes/main")) //main domains
app.use("/api", require("./rutes/api")) //api domains

require('./utilities/mongodb')(mongoose); //conect to mongoDB
require('./utilities/pug')(app, express); //using pug

const port = process.env.PORT || "8000";
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
