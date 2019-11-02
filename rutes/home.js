var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("home", { title: "home" });
});

/*
// post new drone
router.post("/drone", (req, res) => {
    //store {figth} in mongodb
    droneDoc.save()
        .catch((err) => {
            res.status(500).send({ message: 'problem saving to the database' });
            console.log(err);
        }
        )
        .then((saved) => res.send(saved));
});
*/

module.exports = router