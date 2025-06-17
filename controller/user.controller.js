import Customer  from "../model/cust.model.js";
import User  from "../model/user.model.js";

export const checkEmail = (request,response,next)=>{
  Customer.hasEmail(request.params.emailId)
  .then(result=>{
    if(result.length)
     return response.status(200).json({status: true,message: "Sorry!☹️ This email is not available."});
    else
     return response.status(200).json({status: false,message: "Wow!✌️ Nice Email"});
  }).catch(err=>{
    console.log(err);
    return response.status(500).json({ status: false, message: "Server error" });
  })
}
export const addCustomer = (request, response,next)=>{
    let {name, email, phone, address} = request.body;
    let id = Math.floor(Math.random()*900)+100;
    let add = new Customer(id, name, email, phone, address);
    add.addCustomer()
    .then(result=>{
        return response.redirect("/customer");
    }).catch(err=>{
        console.log(err);
        return response.end("Something wrong "+sqlMessage);
    });
}
export const updateCustomer = (request, response, next)=>{
    let {id,name,email,phone,address} = request.body; 
    let update = new Customer(id,name,email,phone,address);
    update.updateCustomerData()
    .then(result=>{
        return response.redirect("/customer");
    }).catch(err=>{
        console.log(err);
        return response.status(500).send("Error updating customer");
    });
}
export const deleteCustomer = (request, response, next) => {
    Customer.deleteCustomerId(request.params.id)
        .then(result => response.redirect("/customer"))
        .catch(err => {
            console.log(err);
            return response.status(500).send("Error deleting customer");
        });
};

export const checkUserEmail = (request,response,next)=>{
  User.hasUserEmail(request.params.emailId)
  .then(result=>{
    if(result.length)
     return response.status(200).json({status: true,message: "Sorry!☹️ This email is not available."});
    else
     return response.status(200).json({status: false,message: "Wow!✌️ Nice Email"});
  }).catch(err=>{
    console.log(err);
    return response.status(500).json({ status: false, message: "Server error" });
  })
}
export const signup = (request, response, next) => {
    let {username,email, password} = request.body;
    let user = new User(null, username, email, password);
    user.addUser()
    .then(result => {
        return response.redirect("/signin");
    }).catch(err => {
        console.log(err);
        return response.status(500).send("Error signing up");
    });
}
export const signin = (request, response, next)=>{
    let {username, password} = request.body;
    User.find(username,password)
    .then(result=>{
        if(result.length){
            console.log(result);
            request.session.isLoggedIn = true;
            return response.redirect("/");
        }
        else{
            return response.redirect("/signin");
        }
    })
    .catch(err=>{
        return response.end("Something went wrong...");
    })
}
export const signout = (request,response,next)=>{
   request.session.isLoggedIn = false;
   request.session.destroy(err =>{
        if(err){
            console.log(err);
            return response.status(500).send("Error signing out");
        }
        return response.redirect("/");
   });
}