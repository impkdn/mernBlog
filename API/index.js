const express = require('express');
const db = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require('./models/user.js');


app.use(cors());
app.use(express.json());
 app.post('/login',  async function (req,res)  {
  await mongoose.connect('mongodb+srv://piyushjld:e8xVAMiPqftqwbNB@cluster0.vcr9fcn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const {username , password} = req.body;
   const doc =  new User({username , password});
   doc.save;

   res.json({doc})
});

app.listen(4000);

// mongodb+srv://piyushjld:e8xVAMiPqftqwbNB@cluster0.vcr9fcn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongo db details
// passWord e8xVAMiPqftqwbNB
// userName piyushjld

// connection string
// mongodb+srv://<username>:<password>@bluechipfirstdatabasecl.ul6e7vq.mongodb.net/