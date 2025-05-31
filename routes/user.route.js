import express from "express";
import {addCustomer,checkEmail,updateCustomer, deleteCustomer } from "../controller/user.controller.js";
const router = express.Router();

router.post("/add-customer",addCustomer);
router.get("/check-email/:emailId",checkEmail);
router.post("/update",updateCustomer);
router.get("/delete-customer/:id",deleteCustomer)

export default router;
