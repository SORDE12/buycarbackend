let mongoose = require("mongoose")



let regSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    city:{type:String,required:true},
    age:{type:Number,required:true},
    pass:{type:String,required:true},

})

let userModal=mongoose.model("user",regSchema)

module.exports={
    userModal
}