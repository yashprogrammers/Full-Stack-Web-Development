const express = require('express');
const router = express.Router();

// Sample API Endpoints
router.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'Ash' }, { id: 2, name: 'John' }, { id: 3, name: 'K' }]);
});

router.post('/users', (req, res) => {
    res.send('New user added!');
});

router.put('/users/:id', (req, res) => {
    res.send(`User with ID ${req.params.id} updated!`);
});

router.delete('/users/:id', (req, res) => {
    res.send(`User with ID ${req.params.id} deleted!`);
});

module.exports = router;

const User = require('../models/userModel'); // Import User model

// Add a New User
router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send('User added to database');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Get All Users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
