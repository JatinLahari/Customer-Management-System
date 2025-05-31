import express from "express";
import { customerCardPage, addCustomerPage, editCustomerPage, deleteCustomerPage, updateCustomerPage,signupPage,signinPage } from "../controller/customer.controller.js";
const router = express.Router();

router.get("/", customerCardPage);
router.get("/customer", customerCardPage);
router.get("/add-customer", addCustomerPage);
router.get("/edit-customer/:id", editCustomerPage);
router.get("/delete-customer/:id", deleteCustomerPage);
router.post("/delete-customer/:id", deleteCustomerPage);
router.get("/update/:id", updateCustomerPage);
router.get("/signup",signupPage);
router.get("/signin",signinPage);
export default router;