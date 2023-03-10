const mongoose=require('mongoose')
const user=mongoose.Schema(
    {
        Username:String,
        Password:String,
        confirm:String,
        type:String,
        contact:String,
        cart:[{ type:mongoose.Schema.Types.ObjectId, ref:'pr'}],
        roles : [{type : String,ref:'role'}]


    }  
)
module.exports=mongoose.model('user',user)