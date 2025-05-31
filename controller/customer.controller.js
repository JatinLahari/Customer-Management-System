import Customer from "../model/cust.model.js";
export const customerCardPage = async (request, response, next)=>{
    let customerList = await Customer.findAllCustomer();
    return response.render("customer.ejs",{customers: customerList});
}
export const addCustomerPage = (request, response, next)=>{
    return response.render("add-customer.ejs");
}
export const editCustomerPage = async (request, response, next)=>{
    let customerId = request.params.id;
    let customerArr = await Customer.findCustomerId(customerId);
    return response.render("edit-customer.ejs",{customer1: customerArr[0]});
}
export const deleteCustomerPage = async (request, response, next)=>{
    if (request.method === "POST") {
        await Customer.deleteCustomerId(request.params.id);
        return response.redirect("/");
    }
    let customerArr = await Customer.findCustomerId(request.params.id);
    let customer = customerArr[0];
    return response.render("delete-customer.ejs", { customer });
}
export const updateCustomerPage = async (request, response, next)=>{
    let customerId = request.params.id;
    let customerArr = await Customer.findCustomerId(customerId);
    return response.render("edit-customer.ejs", { customer1: customerArr[0] });
}
export const signupPage = (request, response, next) => {
    return response.render("signup.ejs");
}
export const signinPage = (request, response, next) => {
    return response.render("signin.ejs");
}