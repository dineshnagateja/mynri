const mongoose =require('mongoose');
const StudentsData=require('./models/students-models');
const dburl = "mongodb+srv://teja:teja123@cluster1.stkfuu0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dburl, {
  useUnifiedTopology : true ,
  
  });
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

const s=new StudentsData({
    name:"somesh",
    rollnumber:"20kp1a0596",
    attendance:60

})
s.save()
    .then(p=>{
        console.log(p)
    })
    .catch(e=>{
        console.log(e);
    })