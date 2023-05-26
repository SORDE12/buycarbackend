let mongoose=require('mongoose');
require('dotenv').config()

let connection=mongoose.connect(process.env.url)


module.exports={
    connection
}

//mongodb+srv://omkar:<password>@cars.zubhml8.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://omkar:omkar@cars.zubhml8.mongodb.net/cars?retryWrites=true&w=majority