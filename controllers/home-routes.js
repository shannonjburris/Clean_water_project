const router = require("express").Router();
const { User, Post, Comment, Algae } = require("../models");
const withAuth = require('../utils/auth')

router.get ('/', (req, res) =>{
    res.render('homepage')
})

router.get('/', async(req, res) => {
    try{
        const renderAlgaeData = await Algae.findAll({
            limit: 20,
            order:[
                'site_visit_date', 'DESC'
            ]
        })

        console.log(renderAlgaeData);

    }catch(error){
        res.status(500).json(error);
    }

})

module.exports = router;