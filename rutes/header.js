var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("home", { title: "test" });
});
module.exports = router     