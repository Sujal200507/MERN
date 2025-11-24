const mongoose = require("mongoose")

const mongodbSetup=async()=>{
   const url = "mongodb://127.0.0.1/mydb"
   await mongoose.connect(url)
   .then(()=>{
    console.log("mongodb connected suceesfully");
   })
   .catch((error)=>{
    console.log(error);
   })
}

module.exports = mongodbSetup