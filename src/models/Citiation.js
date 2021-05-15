
const mongoose = require('mongoose');

const citiationSchema = mongoose.Schema({
    driverId:String,
    officerId:String,
    location:String,
    violationType:String,
    citiationAmount:String
});

mongoose.model('Citiation',citiationSchema);
