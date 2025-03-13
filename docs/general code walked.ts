//// index.js
const express = require('express')
const mongoose = require('mongoose');
const User = require('./backend/models/user.model.js');
const userRoute = require("./backend/routes/user.route.js")
const app=express()

// allow backend communicate with frontend
const cors = require("cors");
app.use(cors()); 
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

//// ***user.route.js
const express =require('express');
const User = require('../backend/models/user.model');
const router =express.Router();
const {getUsers, getUser, createUser, updatedUser, deleteUser} = require('../backend/controllers/user.controller.js');


router.get('/', getUsers);
router.get("/:id", getUser);
router.post("/", createUser);

// update user

router.put('/:id', updatedUser)

// delete user
router.delete('/:id', deleteUser)



module.exports=router;

//// ***user.model.js

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "please enter your first name"]
        },
        lastname: {
            type: String,
            required: [true, "please enter your lastname"]
        },
        email: {
            type: String,
            required: [true, "please enter your email address"]
        },
        BornedCountry: {
            type: String,
            required: [true, "please enter country where your borned"]
        },
        BornedCity: {
            type: String,
            required: [true, "please enter city where your borned"]
        },
        ResidentCountry: {
            type: String,
            required: [true, "please enter your resident country"]
        },
        ResidentCity: {
            type: String,
            required: [true, "please enter your resident city"]
        },
        Password: {
            type: String,
            required: [true, "please enter your password"]
        },
        Role: {
            type: String,
            required: [true, "role"]
        },
        PreferentLanguage: {
            type: String,
            required: [true, "please enter your resident country"]
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        Timestamp: true
    },
);

const User =mongoose.model("User", UserSchema);
module.exports=User;

//// ***user.controller.js
const User = require('../backend/models/user.model');


const getUsers = async (req, res)=>{
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
};

const getUser= async (req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

const createUser = async (req, res)=>{
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
const updatedUser = async (req, res)=>{
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
};

const deleteUser = async (req, res)=>{
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

}


module.exports={
    getUsers,
    getUser,
    createUser,
    updatedUser,
    deleteUser
};