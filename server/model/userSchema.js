const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSch = new mongoose.Schema({
username:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},

});



// Here hash the password
userSch.pre("save",async function(){
    try{
        if(this.isModified("password")){
            this.password = await bcrypt.hash(this.password,10)
        }
    }
    catch(err){
        console.log(err);
    }
})


const userMod = mongoose.model("newregis",userSch);

module.exports = userMod;

