const mongoose = require('mongoose');


const uri = "mongodb+srv://RajRocks:rajsdabhi@cluster0.ymbbwdz.mongodb.net/Practice?retryWrites=true&w=majority";

const connectToMongo = async()=>{
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("MongoDB connected");
    })
}

module.exports = connectToMongo;

