const express = require("express");
const router = express.Router(); 

const {newPostController} = require("../controllers/postControllers.js");

router.post('/', newPostController);

module.exports = router;