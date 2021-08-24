const userMod = require("./../model/userSchema");
const connection = require("./../model/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const  {Register,Login,Logout,Secret,getAllUserData,deleteUser} = require("./../controller/authcontroll");
const auth = require("./../middleware/auth");


router.post("/regisUser",Register);
router.post("/logUser",Login);
router.get("/logoutUser",Logout);
router.get("/secret",auth,Secret);
router.get("/getAllUser",auth,getAllUserData);
router.delete("/delete/:id",auth,deleteUser);


module.exports = router;