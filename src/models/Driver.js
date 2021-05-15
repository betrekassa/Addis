const mongoose = require('mongoose');

//const brcypt = require('brcypt'); //Doesn't work with node 15
//const { hash, validate } = require('../middleware/crypto');

const driverSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    firstName:{
        type:String,
        unique:true,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    driverId:{
        type:String,
        unique:true,
        required:true
    },
    phoneNumber:{
        type:String
    },
    Kebela:{
        type:String
    },
    wereda:{
        type:String
    },
    bloodType:{
        type:String
    },
    organDonor:{
        type:String
    }
});

mongoose.model('Driver',driverSchema);