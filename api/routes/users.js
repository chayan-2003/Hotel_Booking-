import express from "express"
import {  deleteUser, updatedUser,getUser,getAllUser } 
from "../controllers/user.js"
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";

const router= express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user , you are logged in!")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user , you are logged in and you can delete ur account!")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello Admin , you are logged in and you can delete all accounts!")
// })

//UPDATE

router.put("/:id",verifyUser, updatedUser);
//DELETE
router.delete("/:id",verifyUser, deleteUser);
//GET
router.get("/:id",verifyUser,getUser);
//GETALL
router.get("/",verifyAdmin, getAllUser);

export default router;