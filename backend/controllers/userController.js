import express from "express";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import myUser from "../models/userModels.js";

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
