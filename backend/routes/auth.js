const express=require('express');
const router = express.Router();
const { register,login,forgotPassword, resetPassword, getUsers,getUserById, updateUserById, deleteUserById } = require('../controllers/auth');
const { protect, isAdmin, isUser,isAuthorized } = require("../middleware/auth");



router.route("/:userId").delete([protect,isAdmin], deleteUserById);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:resetToken").put(resetPassword);
router.route("/").get([protect,isAdmin], getUsers);
router.route("/:userId").put([protect,isAuthorized], updateUserById);
router.route("/:email").get([protect,isAuthorized], getUserById)
  

module.exports=router;

