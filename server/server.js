const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const app = express();

const publicPath = path.join(__dirname, '..', 'public');
app.use(expres.static(publicPath));

app.get('*', (req, res) =>{
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.use(express.urlencoded({
    extended: true
}));

const uri = process.env.MONGODB_URI;

mongoose.connect("mongodb://localhost:27017/keeperDB", {
    useNewUrlParser: true, useUnifiedTopology: true 
});

mongoose.connection.once('open', () => {
    console.log('Connected to the Database.');
});

mongoose.connection.on('error', err => {
    console.log('Mongoose Connection Error : ' + err);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });