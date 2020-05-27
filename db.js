const mongoose = require('mongoose');

const dbUrl = require('./config').BD;

module.exports = function()
{
    mongoose.set('useNewUrlParser', true);
	mongoose.set('useFindAndModify', false);
	mongoose.set('useCreateIndex', true);
	mongoose.set('useUnifiedTopology', true);
    mongoose.connect(dbUrl);

    mongoose.connection.on('connected', function(){
        console.log('Mongoose connected to the database..')
    });

    mongoose.connection.on('error', function(mongooseErr){
        console.log('Mongoose encountered and error while connecting: ',
        mongooseErr)
    });

    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose was disconnected')
    });

    //handle when the application closes unexpectedly
    process.on('SIGINT', function()
    {
        mongoose.connection.close(function()
        {
            console.log('Mongoose server connection has been interrupted')
            process.exit(0);
        });
    });

}