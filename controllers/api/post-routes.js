const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();

const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

const s3 = new aws.S3({
  accessKeyId: 'AKIAYFNZHDQTPQSCEKPV',
  secretAccessKey: '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',
  region: 'us-east-1'
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "clean-water-app",
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + file.originalname)
        }
    })
 })

// ============ MULTER ==================//
// For uploading to a local folder
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, 'public/assets/images');
//   },
//   filename: (req, file, cb) => {
//       cb(null, file.originalname)
//   }
// });
// Multer filter so we can upload only these kinds of files
const imageFileFilter = (req, file, cb) => {
  if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('You can upload only image files!'), false);
  }
  cb(null, true);
};
// configured storage and filter
// const upload = multer({ storage: storage, fileFilter: imageFileFilter});
// ============ MULTER ==================//

// get post by its Primary key
router.get("/:id", async (req, res) => {
  try {
    const getPostById = await Post.findByPk(req.params.id, {
      include: [
        { model: User,
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
  console.log("Route hit with ", req.body);
  // Maybe save this path to the DB so we can display it in the view
  console.log("Uploading the file:", req.file.location);
  req.body.upload = req.file.location;
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.redirect("/");
  } catch (err) {
    console.log(err);
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
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
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