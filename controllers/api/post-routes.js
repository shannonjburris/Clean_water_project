const router = require('express').Router();
const {Post, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');


// implement route to find post by pk



// implements route to create a new post
router.post('/', withAuth, async (req, res) => {
    try{

    }catch(error){
        res.status(500).json(error)
    }

})






module.exports= router;
