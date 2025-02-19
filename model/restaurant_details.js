const mongoose=require('mongoose')


const restaurantschema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    ItemsArray:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Items'
    }]
})

const restaurant_details = mongoose.model('restaurant_details',restaurantschema)

module.exports={
    restaurant_details
}