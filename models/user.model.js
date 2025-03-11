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