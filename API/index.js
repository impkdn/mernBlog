const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.post('/login', (req,res) => {
    const {userName , passWord} = req.body;
res.json({requestData: {userName, passWord}})
});

app.listen(4000);