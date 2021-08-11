const { Post, User, Comment } = require("../../models");
const withAuth=require("../../utils/auth");
const router=require("express").Router();
const aws=require('aws-sdk');
const multer=require('multer');
const multerS3=require('multer-s3');

require("dotenv").config();

//set up s3 config
const s3 = new aws.S3({
  accessKeyId: process.env.ACCESS_ID,
  secretAccessKey: process.env.ACCESS_KEY,
  region: 'us-east-1'
})

//set up function to upload photo to bucket 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "clean-water-app",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      //this is what is being saved, in order to make sure every photo is unique, use Date.now and then concat the original filename to preserve its extension
      cb(null, Date.now().toString() + file.originalname)
    }
  })
})

const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('You can upload only image files!'), false);
  }
  cb(null, true);
};

// get post by its Primary key
router.get("/:id", async (req, res) => {
  try {
    const getPostById = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ["body"],
        },
      ],
    });
    const plainPost = getPostById.get({ plain: true });
    res.render("single-post", {
      plainPost,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Added middleware here for multer using form input name
router.post("/", withAuth, upload.single('photo'), async (req, res) => {
  // save S3 URL to post for accessing later on
  req.body.upload = req.file.location;
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.redirect("/");
  } catch (err) {
    res.status(500).json(err);
  }
});

// implement update post view
router.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.create(
      {
        title: req.body.title,
        body: req.body.body,
        user_id: req.body.user_id,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log("inside delete route: ", req.body)
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;