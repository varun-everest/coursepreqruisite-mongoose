import express from 'express'
import {  courseModel } from '../Collections/courseprereq';

export const courseRouter = express.Router();

courseRouter.get('/pre',async(req,res)=>{
    try{
        const courses = await courseModel.find();
        res.send(courses)
    }
    catch(e){
        console.log("Error:",e);
    }
})

courseRouter.get('/pre/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const course = await courseModel.findById({_id:id})
        res.json(course);
    }
    catch(e){
        res.send("error")
        console.log("Error:",e);
    }

})
