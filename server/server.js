const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user-profile-db');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


const postRoute = require('./api/routers/postRoutes.js');


// !:----> Routing Starting
app.use('/post', postRoute);


// TODO:----> Starting MongoDB Database connection & check
const db = mongoose.connection;
db.on('error', (err) =>{
    console.log(err);
})
db.once('open', () =>{
    console.log("Database Connection Established!");
})


app.get('/', (req, res, next) =>{
    res.send("User Portal!");
})


// TODO:----> PORT define
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port @${PORT}.`)
})