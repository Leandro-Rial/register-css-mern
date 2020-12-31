require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express()

// Middelware
app.use(cors());
app.use(cookieParser());
app.use(express.json())


// Moongose
const URI = process.env.CONNECTING_URI;

mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connected = mongoose.connection;

connected.once('open', () => {
    console.log('Database connected')
})


// Routes

app.use('/user', require('./routes/userRoutes'));


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running on port: ', PORT)
})