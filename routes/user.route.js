const express =require('express');
const User = require('../models/user.model');
const router =express.Router();
const {getUsers, getUser, createUser, updatedUser, deleteUser} = require('../controllers/user.controller.js');


router.get('/', getUsers);
router.get("/:id", getUser);
router.post("/", createUser);

// update user

router.put('/:id', updatedUser)

// delete user
router.delete('/:id', deleteUser)



module.exports=router;