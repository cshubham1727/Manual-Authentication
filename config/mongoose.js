const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todo_list_db');
const db = mongoose.connection;
// Handling error
db.on('error',console.error.bind(console,'error connecting to the db'));
db.once('open',function(){
    console.log('successfully connected to the db');
})