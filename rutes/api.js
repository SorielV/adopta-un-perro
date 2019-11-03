var express = require('express');
var router = express.Router();
const { Usuario, Perrera } = require('../models'); // /index

router.get("/", (req, res) => {
    res.render("test", { title: "test" });
});

// post new user
router.post("/usuario", (req, res) => {
    let UsrDoc = new Usuario({
        nombre: req.body.nombre,
        apellidoPaterno: req.body.apellidoP,
        apellidoMaterno: req.body.apellidoM,
        contraHash: req.body.contraHash,
        correo: req.body.correo,
    });

    UsrDoc.save()
        .catch((err) => {
            res.status(500).send({ message: 'problem saving to the database' });
            console.log(err);
        })
        .then((saved) => {
            console.log("new user saved");
            res.sendStatus(200);
        });
});

// post new perrera
router.post("/perrera", (req, res) => {
    let PerreraDoc = new Perrera({
        nombre: req.body.nombre,
        direcion: req.body.direcion,
        telefono: req.body.telefono,
        contraHash: req.body.contraHash,
        correo: req.body.correo
    });

    PerreraDoc.save()
        .catch((err) => {
            res.status(500).send({ message: 'problem saving to the database' });
            console.log(err);
        })
        .then((saved) => {
            console.log("new perrera saved");
            res.sendStatus(200);
        });
});

module.exports = router
