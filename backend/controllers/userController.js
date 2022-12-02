import express from "express";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import myUser from "../models/userModels.js";
import validator from "validator";
import bcript from "bcryptjs"

// ?? Find all User:::
export const findAll = async (req,res,next) => {
    try{
        const allUser = await myUser.find().sort({createdAt: -1});
        res.status(200).json(allUser); 
        console.log("Creating user");
        next();
    }catch(err) {
        res.status(500).json({message: err.message});
    }
}
// ?? Find a Single User User:::
export const singleUser = async (req,res,next) => {
    try{
        const {Id} = req.params;
        const singleUser = await myUser.findOne({_id: Id});
        res.status(200).json(singleUser);
        console.log("Creating user");
        next();
    }catch(err) {
        res.status(500).json({message: err.message});
    }
}
export const createUser = async (req,res,next) => {
    const data = req.body;
    const newUser = new myUser(data);
    try{
        await newUser.save();
        res.status(200).json(newUser);
        console.log(newUser);
        next();
    }catch(err) {
        res.status(500).json({message: err.message});
    }
}
// ?? Update User:::
export const updateUser = async (req,res,next) => {
    const data = req.body;
    const {Id} = req.params;
    try{
        const upUser = await myUser.findByIdAndUpdate({_id:Id}, data,{new: true, runValidators: true});
        res.status(200).json(upUser);
        console.log(newUser);
        next();
    }catch(err) {
        res.status(400).json({message: err.message});
    }
}
// ! Delete User :::
export const deleteUser = async (req,res,next) => {
    const {Id} = req.params;
    try{
        const deleteUser = await myUser.findByIdAndDelete({_id:Id});
        res.status(200).json(deleteUser);
        console.log(deleteUser);
        next();
    }catch(err) {
        res.status(400).json({message: err.message});
    }
}

// ? Register a new User :::
export const registerUser = async (req,res,next) => {
    try{
        const {first_name, last_name, phone_number, email, password} = req.body;
        if(!first_name || !last_name || !phone_number || !email || !password) {
            throw Error("All fields are must be fill");
        }
        if(!validator.isEmail(email)){
            throw Error("Email is not valid");
        }
        if(!validator.isStrongPassword(password)){
            throw Error("Please provide a strong password combining with Alp and Num value and maybe special char");
        }

        // Todo: Varifying wheather user or email is already exist or not.
        const isUserExist = await myUser.findOne({email});
        if(isUserExist) return res.status(401).send("Email is already Exist");

        // Todo: Encrypting the password.
        const salt = await bcript.genSalt(10);
        const encryptedPass = await bcript.hash(password, salt);

        // ? Creating a new user.
        const newUser = new myUser({
            first_name,
            last_name,
            phone_number,
            email: email.toLowerCase(),
            password : encryptedPass,
        })

        res.status(200).json(newUser);
        next();
        
    }catch(err){
        res.status(500).json({message: err.message});
    }
}
// ? Login a new User :::
export const loginUser = async (req,res,next) => {
    try{
        const {email, password} = req.body;
        const checkUser = await myUser.findOne({email});

    if(!checkUser) return res.status(401).send("Email is not exist");

    if(!email || !password){
        throw Error("All fields must be fill");
    }

    // ? Matching actual password and hashing password:::
    const matchingPass = await bcript.compare(password, checkUser.password);

    if(!matchingPass) {
        throw Error("Varify Your Credential");
    }
    res.status(200).json({email,password});
    next();
    }catch(err){
        res.status(400).json({message:err.message});
    }   

}