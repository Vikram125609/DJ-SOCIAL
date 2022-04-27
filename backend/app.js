const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const route = require('./Routes/route');
const PORT = process.env.PORT;
const Database = require('./src/Database/Database');
const User = require('./src/Models/user');
app.use(route);
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})