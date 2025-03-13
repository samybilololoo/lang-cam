const express = require('express')
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const userRoute = require("./routes/user.route.js")
const app=express()

//middleway
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
// test my api with insomnia or postnam
//app.post('/api/users', (req, res)=>{
//    console.log(req.body);
//    res.send(req.body)
//});
// get all users enroll in db
app.get('/api/users', async (req, res)=>{
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
// get one specific user by id
app.get('/api/users/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
// insert user into mongodb in atlas
app.post('/api/users', async (req, res)=>{
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
// update a user 
app.put('/api/users/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);

        if(!user){
            return res.status(404).json({message: "user not found in db"});
        }
        const updatedUser = await User.findById(id);
        res.status.apply(200).json(updatedUser);



    }catch (error) {
        res.status(500).json({message:error.message});
    }
});


// delete user 
app.delete('/api/users/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id, req.body);

        if(!user){
            return res.status(404).json({message: "user not found in db"});
        }
        await User.findById(id);
        res.status.apply(200).json({message:"user deleted successfully..."});



    }catch (error) {
        res.status(500).json({message:error.message});
    }
});

mongoose.connect('mongodb+srv://biloloongue:OnReNo986GVQeOmQ@lang-camdb.l8av6.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=lang-CamDB')
.then(()=>{
       console.log('connected to lang-Cam db...')
    }
)
.catch(()=>{
    console.log("connection to lang-Cam failed...")
});