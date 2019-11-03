var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require("bcript");
var Usuario = require("../models/usuario")
var flash = require("express-flash")
var session = require("express-session")

const SECRET = (process.env.SESSION_SECRET || 'ESTAMOSENHAKORAMACOLIMA');


module.exports = (app, passport) => {
    const getUserByEmail = email => { } //TODO: QUE ASAQUE EL USUARIO DE MONGO
    /*
        Usuario.findById(id, (err, user) => {
            done(err, user);
        });
    */

    const authenticateUser = async (email, password, done) => {
        let user = getUserByEmail(email);
        if (user == null) {
            return done(null, false, { message: "no se encontro el usuario" });
        }

        try {
            if (await bcrypt.compare(password, user.pasword)) {
                return done(null, user);
            }
            else {
                return done(null, false, { message: "contraseña incorrecta" });
            }
        }
        catch (e) {
            return done(e);
        }
    }

    passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));


    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        Usuario.findById(id, (err, user) => {
            done(err, user);
        });
    });


    app.use(flash());
    app.use(session({
        secret: SECRET,
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());

}
