
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors")
const path = require("path");
const router = path.join(__dirname,"./routing/route");
const cookieParser =require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(require(router));
app.use(cors());




app.listen(PORT,()=>{
    console.log(`your server is running on ${PORT}`);
})




