const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

// Correction des chemins d'importation
const User = require('./backend/models/user.model.js');
const userRoute = require("./backend/routes/user.route.js");

const app = express();

// Autoriser la communication avec le frontend
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRoute);

app.listen(4000, () => {
    console.log("Server running on port 4000...");
});

app.get('/', function (req, res) {
    res.send("Welcome home for language, we are the same and one...");
});

// Connexion à la base de données
mongoose.connect('mongodb+srv://biloloongue:OnReNo986GVQeOmQ@lang-camdb.l8av6.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=lang-CamDB')
    .then(() => {
        console.log('Connected to lang-Cam DB...');
    })
    .catch(() => {
        console.log("Connection to lang-Cam failed...");
    });
