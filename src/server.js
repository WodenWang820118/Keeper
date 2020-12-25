const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const path = require('path');
const PORT = process.env.PORT || 3001;
require('dotenv').config();

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use('/api', router);

mongoose.connect("mongodb+srv://GuanXin:alex820118@cluster0.9qljn.mongodb.net/keeperDB", {
    useNewUrlParser: true
});

mongoose.connection.once('open', () => {
    console.log('Connected to the Database.');
});

mongoose.connection.on('error', err => {
    console.log('Mongoose Connection Error : ' + err);
});

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('keeper/components'));

  

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'keeper', 'components', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });