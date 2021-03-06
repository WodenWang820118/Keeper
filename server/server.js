const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const app = express();

const publicPath = path.join(__dirname, '..', 'build');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
    console.log("Successfully connected to the server.");
})

app.use(express.urlencoded({
    extended: true
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });



// const uri = process.env.MONGODB_URI;

// mongoose.connect(uri, {
//     useNewUrlParser: true, useUnifiedTopology: true 
// });

// mongoose.connection.once('open', () => {
//     console.log('Connected to the Database.');
// });

// mongoose.connection.on('error', err => {
//     console.log('Mongoose Connection Error : ' + err);
// });

