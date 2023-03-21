const express = require("express");
const { default: mongoose } = require("mongoose");

const router = express.Router()


const Chapter=require('../models/ChapterModel.js')
router.post("/create",async (req,res) =>{
    const chapterData = req.body;

    const chapter=await Chapter.create(chapterData)
    await chapter.save();
    res.status(201).json({
        success:true,
        chapter
    })
})

router.get("/get/:id",async (req,res) =>{
    const courseId=mongoose.Types.ObjectId(req.params.id)
   
    try {
        const chapterData=await Chapter.find({courseId});
        res.status(200).json({
            success:true,
            chapterData
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error
        })
    }
    
})


router.get("/:id",async (req,res) =>{
    
    try {
        const chapterData=await Chapter.find({courseId:req.params.id});
        res.status(200).json({
            success:true,
            chapterData
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error
        })
    }
    
})


router.put("/update/:id",async (req,res) =>{
    const chapterId=req.params.id;
    const NewchapterData=req.body;
    try {
        const chapterData=await Chapter.findByIdAndUpdate(chapterId,NewchapterData,{new:true});
        res.status(200).json({
            success:true,
            chapterData
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error
        })
    }
    
})

router.delete("/delete/:id",async (req,res) =>{
    const chapterId=req.params.id;
    try {
        const chapterData=await Chapter.findByIdAndDelete(chapterId);
        res.status(200).json({
            success:true,
            message:"Chapter Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error
        })
    }
    
})
module.exports = router