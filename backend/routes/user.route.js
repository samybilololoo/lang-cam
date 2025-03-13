const express =require('express');
const router =express.Router();
const User = require('../models/user.model');
const { getUsers, getUser, createUser, updatedUser, deleteUser } = require('../controllers/user.controller');

router.get('/', getUsers);
router.get("/:id", getUser);
router.post("/", createUser);

// update user

router.put('/:id', updatedUser)

// delete user
router.delete('/:id', deleteUser)



module.exports=router;