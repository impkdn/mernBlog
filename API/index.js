const express = require('express');
const db = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require('./models/User.js');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);


app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://piyushjld:e8xVAMiPqftqwbNB@cluster0.vcr9fcn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
 app.post('/signup',  async function (req,res)  {
   try 
   

   {
      const {username , password} = req.body;
       const userdoc = await  User.create({
         username , 
         password: bcrypt.hashSync(password,salt),

      });
      res.json({userdoc});

      //  userdoc.save;
      
   }
   catch(e){
      console.log(e);
      res.status(400).json(e);

   }

  
  
});
app.post('/login', async function (req,res) {
   const {username, password} = req.body;
   const userdoc = await User.findOne({username});
   res.json({username});
   
})
app.listen(4000);

// mongodb+srv://piyushjld:e8xVAMiPqftqwbNB@cluster0.vcr9fcn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongo db details
// passWord e8xVAMiPqftqwbNB
// userName piyushjld

// connection string
// mongodb+srv://<username>:<password>@bluechipfirstdatabasecl.ul6e7vq.mongodb.net/