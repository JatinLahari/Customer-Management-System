import Customer  from "../model/cust.model.js";

export const checkEmail = (request,response,next)=>{
  Customer.hasEmail(request.params.emailId)
  .then(result=>{
    if(result.length)
     return response.status(200).json({status: true,message: "Email Id is already taken"});
    else
     return response.status(200).json({status: false,message: "Available"});
  }).catch(err=>{
    console.log(err);
  })
}
export const addCustomer = (request, response,next)=>{
    let {name, email, phone, address} = request.body;
    let id = Math.floor(Math.random()*900)+100;
    let add = new Customer(id, name, email, phone, address);
    add.addCustomer()
    .then(result=>{
        return response.redirect("/");
    }).catch(err=>{
        console.log(err);
        response.end("Something wrong");
    });
}
export const updateCustomer = (request, response, next)=>{
    let {id,name,email,phone,address} = request.body; 
    let update = new Customer(id,name,email,phone,address);
    update.updateCustomerData()
    .then(result=>{
        return response.redirect("/");
    }).catch(err=>{
        console.log(err);
        return response.status(500).send("Error updating customer");
    });
}
export const deleteCustomer = (request, response, next) => {
    Customer.deleteCustomerId(request.params.id)
        .then(result => response.redirect("/"))
        .catch(err => {
            console.log(err);
            response.status(500).send("Error deleting customer");
        });
};