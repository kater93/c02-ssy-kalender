const express = require('express');
const db = require('../src/database');
const User = require('../src/User');

const router = express.Router();

router.get('/', getAllUsers);
router.post("/", createUser);
router.get('/:userId', getSingleUser);

let userCollection = db.getCollection('users');

function getAllUsers(request, response) {
    let userObjects = userCollection.find();
    response.json(userObjects);
}

function getSingleUser(request, response) {
    let userId = request.params.userId;
    let userObject = userCollection.get(userId);
    response.json(userObject);
}

function createUser(request, response) {
    let newuser = new User(request.body.name);
    userCollection.insert(newuser);
    response.json(newuser);
}

module.exports = router;