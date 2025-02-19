const mongoose=require('mongoose')

const itemschema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    }
})

const item=mongoose.model('item',itemschema)

module.exports={
    item
}