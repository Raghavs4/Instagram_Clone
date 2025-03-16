import mongoose, { Types } from "mongoose";
const conversationSchema = new mongoose.Schema({
participants : {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
},
message : {
 type:mongoose.Schema.Types.ObjectId,
    ref:'Message'
},

});

export const conversation = mongoose.model('Conersation',conversationSchema);