const express = require('express');

const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');

//const requiredAuth = require('../middleware/requireAuth');

const Citiation = mongoose.model('Citiation');

const router = express.Router();

router.use(requireAuth);

router.get('/citiations',async(req,res)=>{

    //console.log(req.user._id);
    const citiations = await Citiation;//.find({userId: req.user._id});
    res.send(citiations);
});

router.post('/citiation',async(req,res) =>
    {
        const {driverId, officerId, location , violationType, citiationAmount} = req.body;
        if (!driverId || !location || !officerId || !violationType || !citiationAmount) 
            {
                return res.status(422).send({error: 'You must provide name & Location'});
            }
        try
        {
            const citiation = new Citiation({driverId, officerId , location ,violationType ,citiationAmount });
            await citiation.save();
            res.send(citiation);
        } catch(err)
        {
            return res.status(422).send({error: 'You must provide name & Location'});
        }
    });

    module.exports = router;
