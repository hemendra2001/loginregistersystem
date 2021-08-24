const mongoose = require("mongoose");


// Here our connection

const connection = mongoose.connect("mongodb://localhost:127.0.0.1/regislog",{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connection Successfull")
}).catch((err)=>{
    console.log(err)
})



module.exports = connection;