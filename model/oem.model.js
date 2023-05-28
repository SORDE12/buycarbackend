let mongoose = require("mongoose")

let oemSchema=mongoose.Schema({
    url:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    color:{type:[String],required:true},
    mileage:{type:String,required:true}
})

let OemModal=mongoose.model("oem",oemSchema)

module.exports={
    OemModal
}