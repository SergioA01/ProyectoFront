const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sergioaguirre:ELEat1xoyB37fAv3@clustersergio.rfisjyu.mongodb.net/?retryWrites=true&w=majority')
.then(db => console.log('Db is connected'))
.catch(err => console.log(err));;
const db = mongoose.connection;
