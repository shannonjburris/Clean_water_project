const router = require("express").Router();
const { User, Post, Comment, Algae } = require("../models");
const withAuth = require('../utils/auth')

router.get ('/', async (req, res) =>{
   
    
// router.get('/', async(req, res) => {
//     try{
//         const renderAlgaeData = await Algae.findAll({
//             limit: 20,
//             order:[
//                 'site_visit_date', 'DESC'
//             ]
//         })

//         console.log(renderAlgaeData);

//     }catch(error){
//         res.status(500).json(error);
//     }

// })
    res.render('homepage')
})


// get to login or redirect back home

router.get('/login', (req, res) => {
    // if user logs in they are redirected to the dashboard
    if(req.session.logged_in){
        res.redirect('/dashboard')
    }

    res.render('login');
})

router.get('/signup', (req, res) =>{
    res.render('signup');
})



module.exports = router;