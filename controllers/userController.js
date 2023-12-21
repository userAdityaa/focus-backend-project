const {userSchema} = require('../validations/userValidation');
const User = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 12;


const userController = {
    home: (req, res) => {
        res.send("Hello Home Page");
    },
    about: (req, res) => {
        res.send("Hello About section");
    },
    signIn: async (req, res) => {
        try {
          const { value, error } = userSchema.validate(req.body);
          if (error) {
            return res.status(400).send("Validation error message");
          }
          const { email, password } = value;
          const salt = await bcrypt.genSalt(saltRounds);
          const hashPass = await bcrypt.hash(password, salt);
          const user = await User.findOne({ email: email});

          if(bcrypt.compare(user.password, hashPass)){
            return res.status(200).json({ message: "User authenticated", user });
          }
          else {
            // Send a failure message
            console.log("User Nahi Hain");
            return res.status(401).json({ message: "Invalid email or password" });
          }
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal server error" });
        }
    }, 
    signUp: async(req, res) => {
      try{
        const {value, error} = userSchema.validate(req.body);
        if(error){
          return res.status(400);
        }
        const{email, password} = value;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPass = await bcrypt.hash(password, salt);
        const user = await User.create({email: email, password: hashPass});
        await user.save();
        console.log("Now sending this status");
        return res.status(200).json({message: "All Good"});
      }
      catch(err){
        console.log(err);
      }
    },   
    checkIn:(req, res) => {
        if (req.session.user) {
            res.send('Session established. User is logged in.');
        } else {
            // Session doesn't exist, user is not logged in
            res.send('No session established. User is not logged in.');
        }
    }
};

module.exports = userController;