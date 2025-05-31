import pool from "../db/db.js";

class User{
    constructor(id,name,password){
        this.id = id;
        this.name = name;
        this.password = password;
    }

    addUser(){
        return new Promise((resolve, reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                    let sql = "Insert into users(name,password) values(?,?)";
                    con.query(sql,[this.name, this.password],(err,result)=>{
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