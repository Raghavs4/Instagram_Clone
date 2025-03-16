import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
text:{type:String,required:true},
author:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
author:{type:mongoose.Schema.Types.ObjectId,ref:'Post',required:true},
})

export const post = mongoose.model('Comment',commentSchema);