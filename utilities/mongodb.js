//MONGODB_URI defined in heroku
var mongoUri = (process.env.MONGODB_URI || 'mongodb://localhost/perritos');

module.exports = (mongoose)=>{
    // connect to  mongoDB
    mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((e) => {
        console.log(e.message)
        console.error("no se pudo conectar a mongo")
        //process.exit(1)
        return;
    })
    .then(() => {
        console.log("connected to Mongo Atlas")
    });
}