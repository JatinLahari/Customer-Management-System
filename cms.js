import express from "express";
import path from "path";
import bodyParser from "body-parser";
import customerRouter from "./routes/customer.route.js";
import userRouter from "./routes/user.route.js";
const cms = express();

cms.set("view engine","ejs");
cms.use(bodyParser.json());
cms.use(bodyParser.urlencoded({extended:true}));
cms.use("/user",userRouter);
cms.use("/",customerRouter);


cms.listen(2301,()=>{
    console.log("server 2301 started...");
})
