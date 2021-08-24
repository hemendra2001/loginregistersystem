const userMod = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Here register User
const Register = async(req,res) =>{
const{username,email,password} = req.body;
if(!username|| !email || !password){
  return  res.status(400).json({Message:"Please fill all the detail"})
}
if (username.length < 6)
return res.status(400).json({
  Message: "Please enter a username of at least 6 characters.",
});


if (password.length < 6)
return res.status(400).json({
Message: "Please enter a password of at least 6 characters.",
});


try{
  const searchUser = await userMod.findOne({email});
  if(searchUser){
    return res.status(400).json({Message:"User already present"})
  }
  else{
    const userGet = await new userMod({username,email,password});
    const saveData = await userGet.save();
    res.status(200).json({Success:"User Registered Sucessfull"})

  }

}
catch(err){
    console.log(err);
    res.status(500).json({Message:"Internal Error"})
}
}





// Check
// register

// const Register = async (req, res) => {
//   try {
//     const { email, password, username } = req.body;
//     // validation
//     if (!email || !password || !username)
//       return res
//         .status(400)
//         .json({ Message: "Please enter all required fields." });

  
//         if (username.length < 6)
//         return res.status(400).json({
//           Message: "Please enter a username of at least 6 characters.",
//         });

  
//         if (password.length < 6)
//       return res.status(400).json({
//         Message: "Please enter a password of at least 6 characters.",
//       });


//     const existingUser = await userMod.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({
//         Message: "An account with this email already exists.",
//       });

//     const newUser = new userMod({
//       email,
//       password,
//       username
//     });

//     const savedUser = await newUser.save();
//     return res.status(200).json({
//       Success: "User registered Successfull.",
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send();
//   }
// };


















// Here Login User
const Login = async(req,res) =>{
  try{
    const{email,password} = req.body;
    if(!email || !password){
      return res.status(400).json({Message:"Please fill all the detail"})
    }

    const userLogin = await userMod.findOne({email:email});
    if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password);
        if(isMatch){
      
       // Here token generate
      const token = jwt.sign({_id:userLogin._id},'secretkey');

      // Here store in cookie
      const cookie =  res.cookie("tokengen",token,{
         httpOnly:true,
       });
       res.status(200).json({User:userLogin.username});
       }
       else{
          res.status(400).json({Message:"Invalid Credentials"});
        }
    }
    else{
        res.status(400).json({Message:"User is not Present"});
    }
    }
  catch(err){
    console.log(err);
    res.status(500).json({Message:"Internal Error"})
  }
}


// Here logout User
const Logout = (req,res) =>{
  res.clearCookie('tokengen',{path:'/'})
  res.status(200).send('User Logout');
}



// Here secret Page
const Secret = (req,res) =>{
}


// Here get all User
const getAllUserData = async(req,res)=>{
  try{
    const users = await userMod.find({});
    res.status(200).json(users);
  }
  catch(err){
    console.log(err);
    res.status(500).json({Error:"Internal Error"})
  }
}


// Here delete User
const deleteUser = async(req,res)=>{
  try{
    const users = await userMod.findByIdAndRemove(req.params.id);
    res.status(200).json({Success:"User Deleted"});
  }
  catch(err){
    console.log(err);
    res.status(500).json({Error:"Internal Error"})
  }

}



module.exports = {Register,Login,Logout,Secret,getAllUserData,deleteUser};