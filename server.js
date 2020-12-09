const express = require('express');
const app = express();
const cors =require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://Rii123:Yhteys21@desert.kyn4g.mongodb.net/asiakasDB");

//require route
app.use("/", require("./routes/noteRoutes"));

app.listen(3001, function(){
    console.log("express server running on 3001");
})