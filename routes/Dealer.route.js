let bcrypt = require('bcrypt')
let express = require("express");
let jwt = require("jsonwebtoken");
let {userModal}=require("../model/user.model")
const dealerRouter=express.Router()

dealerRouter.post("/register", async (req, res) => {
    let { name, email, city, age, pass } = req.body;
    try {
      bcrypt.hash(pass, 5, async (err, hash_pass) => {
        if (err) {
          console.log(err);
          res.send({ msg: "something went wrong ",err:err.message });
        } else {
          let user = new userModal({ name, email, city, age, pass: hash_pass });
          await user.save();
          res.send({ msg: "registered successfully" });
        }
      });
    } catch (err) {
      res.send({ msg: "not registered", err: err.message });
    }
  });
  
  dealerRouter.post("/login", async (req, res) => {
    let { email, pass } = req.body;
    try {
      let user = await userModal.find({ email });
      console.log(user);
      if (user.length > 0) {
          bcrypt.compare(pass, user[0].pass, (err, result)=> {
              if(result){
                  let token = jwt.sign({ userID:user[0]._id }, "masai");
                  res.send({ msg: "login successfully", token: token });
              }else{
                  res.send({ msg: "wrong credentials" });
              }
          });
      } else {
          res.send({ msg: "wrong credentials" });
      }
    } catch (err) {
      res.send({ msg: "not registered", err: err.message });
    }
  });

  module.exports={
    dealerRouter
  }