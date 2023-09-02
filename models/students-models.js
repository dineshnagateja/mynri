const mongoose=require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollnumber:{
        type:String,
        required : true,
        lowercase:true
    },
    attendance:{
        type:Number,
        required:true
    },
})
const StudentsData= mongoose.model('StudentsData',studentSchema);
module.exports=StudentsData;