const mongoose = require("mongoose")

const mongodbSetup=async()=>{
   const url = process.env.MONGO_URI
   await mongoose.connect(url)
   .then(()=>{
    console.log("mongodb connected suceesfully");
   })
   .catch((error)=>{
    console.log(error);
   })
}

module.exports = mongodbSetup