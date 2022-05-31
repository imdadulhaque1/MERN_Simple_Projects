const express = require("express");
const router = express.Router(); 

const {newPostController, getAllPostController, getSinglePostController, deleteSinglePostController, updateSinglePostController} = require("../controllers/postControllers.js");

router.post('/create-post', newPostController);
router.get('/', getAllPostController);
router.get('/:id', getSinglePostController);
router.delete('/:id', deleteSinglePostController);
router.put('/:id', updateSinglePostController);


module.exports = router;