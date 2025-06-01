import pool from "../db/db.js";

class User{
    constructor(id,name,email,password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static find(username,password){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "select * from users where name = ? and password = ?";
                   con.query(sql,[username,password],(err,result)=>{
                      con.release();
                      err ? reject(err) : resolve(result);
                   })
                }
                else reject(err);
            })
          });   
    }
    static hasUserEmail(email){
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(!err){
                    let sql = "Select * from users where email = ?";
                    con.query(sql,[email],(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);
                    });
                }
                else reject(err);
            });
        });
    }
    addUser(){
        return new Promise((resolve, reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                    let sql = "Insert into users(name,email,password) values(?,?,?)";
                    con.query(sql,[this.name,this.email, this.password],(err,result)=>{
                        con.release();
                        err ? reject(err): resolve(result);
                    })
                }
                else reject(err);
            })
        });
    }
}
export default User;