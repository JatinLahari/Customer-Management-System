import Customer from "../model/cust.model.js";
import User from "../model/user.model.js";
export const indexPage = async(request, response, next)=>{
    let username = await User.find();
    return response.render("index.ejs",{isLoggedIn: request.session.isLoggedIn, username: username});
}
export const customerCardPage = async (request, response, next)=>{
    let customerList = await Customer.findAllCustomer();
    let username = await User.find();
    return response.render("customer.ejs",{customers: customerList,isLoggedIn: request.session.isLoggedIn,username:username});
}
export const addCustomerPage = (request, response, next)=>{
    return response.render("add-customer.ejs",{isLoggedIn: request.session.isLoggedIn});
}
export const editCustomerPage = async (request, response, next)=>{
    let customerId = request.params.id;
    let customerArr = await Customer.findCustomerId(customerId);
    return response.render("edit-customer.ejs",{customer1: customerArr[0], isLoggedIn: request.session.isLoggedIn});
}
export const deleteCustomerPage = async (request, response, next)=>{
    if (request.method === "POST") {
        await Customer.deleteCustomerId(request.params.id);
        return response.redirect("/");
    }
    let customerArr = await Customer.findCustomerId(request.params.id);
    let customer = customerArr[0];
    return response.render("delete-customer.ejs", { customer, isLoggedIn: request.session.isLoggedIn });
}
export const updateCustomerPage = async (request, response, next)=>{
    let customerId = request.params.id;
    let customerArr = await Customer.findCustomerId(customerId);
    return response.render("edit-customer.ejs", { customer1: customerArr[0], isLoggedIn: request.session.isLoggedIn });
}
export const signupPage = (request, response, next) => {
    return response.render("signup.ejs");
}
export const signinPage = (request, response, next) => {
    return response.render("signin.ejs");
}