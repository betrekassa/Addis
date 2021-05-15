const express = require('express');

const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');

//const requiredAuth = require('../middleware/requireAuth');

const Driver = mongoose.model('Driver');

const router = express.Router();

router.use(requireAuth);

router.get('/driver',async(req,res)=>{

    //console.log(req.user._id);
    const driver = await Track.find({userId: req.user._id});
    res.send(driver);
});

router.post('/driver',async(req,res) =>
    {
        const {  firstName, lastName, driverId, phoneNumber, kebela, wereda , bloodType , organDonor} = req.body;

        if (!firstName || !lastName) 
            {
                return res.status(422).send({error: 'You must provide your Profile!'});
            }
        try
        {
            const driver = new Driver({userId:req.user._id, firstName , lastName,driverId, phoneNumber , kebela, wereda , bloodType , organDonor});
            await driver.save();
            res.send(driver);
        } catch(err)
        {
            return res.status(422).send({error: 'You must provide your Profile!!'});
        }
    });

    module.exports = router;
