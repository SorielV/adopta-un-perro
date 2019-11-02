var express = require('express');
var router = express.Router();
/*
MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Unable to connect to the Server', err);
    } else {
        console.log('Connection established to', url);

        var employeecollection = db.collection('lomitos');

        //busca todos los perritos
        employeecollection.find({}).toArray(function(err, employeeResult) {
            if (err) {
                res.send(err);
            } else if (LomitosResult.length) {
                res.render('lomitoslist', {
                    'lomitoslist': LomitosResult,
                });
            } else {
                res.send('No documents found');
            }
            db.close();
        });
    };

});*/
router.get("/", (req, res) => {
    res.render("ListLomitos", { title: "Elije a tu lomito" });
});
module.exports = router

