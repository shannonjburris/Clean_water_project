const router = require("express").Router();
const Algae  = require('../../models/algae.js');

router.get("/:county/:algae", (req, res) => {
    //only show locations with observed algae 
    if (req.params.algae === 'true') {
        Algae.findAll({
            where: {
                county: req.params.county,
                algae_observed: "Yes"
            }
        })
            .then(data => res.send(data))
    } else {
        //show all results regardless of observable algae
        Algae.findAll({
            where: {
                county: req.params.county
            }
        })
            .then(data => res.send(data))
    }
});

module.exports = router;
