import mongoose from "mongoose"

const contactSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const Contact = mongoose.model("Contact",contactSchema)

module.exports = Contact