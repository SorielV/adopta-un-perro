
const express = require("express");

const app = express();

app.use(express.json()); //why? : https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json

app.use("/header", require("./rutes/header")) //main domains
app.use("/login", require("./rutes/login")) //main domains
app.use("/", require("./rutes/core")) //main domains
app.use("/perrera", require("./rutes/perrera")) //main domains
app.use("/usuario", require("./rutes/usuario")) //main domains
app.use("/api", require("./rutes/api.js")) //api domains

app.set('view engine', 'ejs');

const port = process.env.PORT || "8000";
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
