// require express, dotenv, mongoose

const express = require('express');
const port = require('./config')
require('dotenv').config();

//import models (dao)
const Cat = require('./api/cat/cat.dao');
const Dog = require('./api/dog/dog.dao');
const Fish = require('./api/fish/fish.dao');

//import router generator function
const routerGen = require('./api/router')

const db = require('./db')
const server = express();

//middleware stuff
server.use(express.json());

//tell to connect to database
db();


//tell server to use all of the routes
server.use('/cat', routerGen(Cat));
server.use('/', routerGen(Dog));
server.use('/', routerGen(Fish));


server.listen(3321, (err) =>
{
    if (err)
    {
        console.log('Error starting server: ', err);
    }
})