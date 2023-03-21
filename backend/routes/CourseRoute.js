const express = require("express");

const router = express.Router()


const Course=require('../models/CourseModel.js')
router.post("/create",async (req,res) =>{
    const courseData = req.body;

    const course=await Course.create(courseData)
    await course.save();
    res.status(201).json({
        success:true,
        course
    })
})

router.get("/get/:id",async (req,res) =>{
    const cousreId=req.params.id;
    try {
        const courseData=await Course.findById(cousreId);
        res.status(200).json({
            success:true,
            courseData
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error
        })
    }
    
})


router.get("/all",async (req,res) =>{
    
    try {
        const courseData=await Course.find();
        res.status(200).json({
            success:true,
            courseData
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error
        })
    }
    
})


router.put("/update/:id",async (req,res) =>{
    const cousreId=req.params.id;
    const NewCourseData=req.body;
    try {
        const courseData=await Course.findByIdAndUpdate(cousreId,NewCourseData,{new:true});
        res.status(200).json({
            success:true,
            courseData
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error
        })
    }
    
})

router.delete("/delete/:id",async (req,res) =>{
    const cousreId=req.params.id;
    try {
        const courseData=await Course.findByIdAndDelete(cousreId);
        res.status(200).json({
            success:true,
            message:"Course Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error
        })
    }
    
})
module.exports = router