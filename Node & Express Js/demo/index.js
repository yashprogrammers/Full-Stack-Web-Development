const mongoose = require('mongoose');
const express = require('express'); // Express import
const app = express(); // App create

app.use(express.json()); // JSON data handle karne ke liye middleware

// Basic Route
app.get('/', (req, res) => {
    res.send('Welcome to my Node.js Server!');
});

// Start Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

const userRoutes = require('./routes/userRoutes'); // Import routes
app.use('/api', userRoutes); // Use routes at "/api"


// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error('MongoDB connection error:', err));
