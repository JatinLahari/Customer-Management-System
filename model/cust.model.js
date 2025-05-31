import pool from "../db/db.js";

class Customer{
    constructor(id,name,email,phone,address){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    static deleteCustomerId(id) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, con) => {
            if (!err) {
                let sql = "delete from customers where id = ?";
                con.query(sql, [id], (err, result) => {
                    con.release();
                    err ? reject(err) : resolve(result);
                });
            } else reject(err);
        });
    });
}
    static findCustomerId(id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                let sql = "Select * from customers where id = ?";
                con.query(sql,[id],(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(result);
                });
                }
                else reject(err);
            });
        });
    }

    updateCustomerData(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                    let sql = "Update customers set name = ?, email = ?, phone = ?, address = ? where id = ?";
                    con.query(sql,[this.name,this.email,this.phone,this.address, this.id],(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);
                    });
                }
                else reject(err);   
            });
        });
    }
    static findAllCustomer(){
        return new Promise((resolve, reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                    let sql = "select * from Customers";
                    con.query(sql,(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);
                    });
                }
                else reject(err);
            })
        })
    }
    static hasEmail(email){
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(!err){
                    let sql = "Select * from Customers where email = ?";
                    con.query(sql,[email],(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);
                    })
                }
                else reject(err);
            });
        });
    }
    addCustomer(){
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(!err){
                    let sql = "Insert into customers(id,name,email,phone,address) values(?,?,?,?,?)";
                    con.query(sql,[this.id, this.name, this.email, this.phone, this.address],(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);
                    }); 
                }
                else reject(err);
            });
        });
    }
}
export default Customer;