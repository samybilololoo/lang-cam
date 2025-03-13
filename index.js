const express = require('express')
const mongoose = require('mongoose');
const User = require('./backend/models/user.model.js');
const userRoute = require("./backend/routes/user.route.js")
const app=express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use("/api/users", userRoute);

app.listen(4000, ()=>{
    console.log("server running on port 4000.....");

});
app.get('/', function(req, res){
    res.send("Welcome home for language we are the same and one ....")
});



mongoose.connect('mongodb+srv://biloloongue:OnReNo986GVQeOmQ@lang-camdb.l8av6.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=lang-CamDB')
.then(()=>{
       console.log('connected to lang-Cam db...')
    }
)
.catch(()=>{
    console.log("connection to lang-Cam failed...")
});