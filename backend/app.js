const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const route = require('./Routes/route');
const PORT = process.env.PORT;
const Database = require('./src/Database/Database');
app.use(express.json());
app.use('/user',route);
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})