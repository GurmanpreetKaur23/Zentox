const express = require('express') ;
const app = express() ;
require('dotenv').config() ;

const bodyParser = require('body-parser') ; // when someone sends data to your server it arrives in a format that is hard to understand directly so body-parser translates it

const cors = require('cors') ;
// CORS - CROSS ORIGIN RESOURCE SHARING -> letting your backend data share with the frontend running else where

const auth = require('./routes/auth');
require('./models/db') ;

app.use(bodyParser.json()) ;
app.use(cors()) ;

app.use('/auth' , auth) ;
const PORT = process.env.PORT || 8080 ;


app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})