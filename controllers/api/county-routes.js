const router = require("express").Router();
const Algae = require('../../models/algae.js');

// get post by its Primary key
router.get("/:county/:micro/:comments", (req, res) => {
    console.log(req.params.county);
    //we are here
    Algae.findAll({
        where: {
            county: req.params.county
        }
    })
    .then(data => res.send(data))
    // res.send( { 'title': 'nice!' } )
  });

module.exports = router;
