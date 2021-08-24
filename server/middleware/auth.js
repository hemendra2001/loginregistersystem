const jwt = require("jsonwebtoken")
const userModel = require("./../model/userSchema");


const auth = async(req,res,next) =>{

    try{
        const token = req.cookies.tokengen;
       const verifyUser = jwt.verify(token,'secretkey');
       const getUser = await userModel.findOne({_id:verifyUser._id});
       req.token = token;
       req.getUser = getUser?.username;
       if(!verifyUser){
        res.status(400).json({Error:"Token Failed"})
       }
       next();
    }
    catch(err){
       res.status(400).json({Error:"You are not Authorized"})
       console.log(err);
}


}

module.exports = auth;