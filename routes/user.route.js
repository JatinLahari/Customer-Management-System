import express from "express";
import {addCustomer,checkEmail,updateCustomer, deleteCustomer,checkUserEmail,signup,signin,signout } from "../controller/user.controller.js";
const router = express.Router();

// http://localhost:3000/user/
router.post("/add-customer",addCustomer);
router.get("/check-email/:emailId",checkEmail);
router.post("/update",updateCustomer);
router.get("/delete-customer/:id",deleteCustomer);
router.get("/check-user/:emailId",checkUserEmail);
router.post("/signup",signup);
router.post("/signin",signin);
router.get("/sign-out",signout);

export default router;
