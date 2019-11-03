//MONGODB_URI defined in heroku
var mongoUri = (process.env.MONGODB_URI || 'mongodb://localhost/perritos');

module.exports = (mongoose)=>{
    // connect to  mongoDB
    mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((e) => {
        console.log(e.message)
        console.log("terminando")
        process.exit(1)
        
    })
    .then(() => {
        console.log("connected to Mongo Atlas")
    });
}