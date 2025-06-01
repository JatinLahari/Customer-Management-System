import express from "express";
import { customerCardPage, addCustomerPage, editCustomerPage, deleteCustomerPage, updateCustomerPage,signupPage,signinPage } from "../controller/customer.controller.js";
import { authentication } from "../middleware/authentication.js";
const router = express.Router();

router.get("/", authentication, customerCardPage);
router.get("/customer",authentication, customerCardPage);
router.get("/add-customer", authentication, addCustomerPage);
router.get("/edit-customer/:id",authentication, editCustomerPage);
router.get("/delete-customer/:id",authentication, deleteCustomerPage);
router.post("/delete-customer/:id",authentication, deleteCustomerPage);
router.get("/update/:id", authentication, updateCustomerPage);
router.get("/signup",signupPage);
router.get("/signin",signinPage);
export default router;