let mongoose = require("mongoose")

let carSchema=mongoose.Schema({
    url:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    color:{type:String,required:true},
    mileage:{type:String,required:true},
    userID:{type:String,required:true}
})

let CarModal=mongoose.model("car",carSchema)

module.exports={
    CarModal
}

// {
//     "title":"honda",
//     "price":"12541",
//     "color":"red",
//     "mileage":"25kmpl"
// }
