const express=require("express");
const app=express();
const path=require('path');
const mongoose =require('mongoose');
const StudentsData=require('./models/students-models');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'path')));
app.use('/imagess', express.static(path.join(__dirname, 'imagess')));


const dburl ="mongodb+srv://teja:teja123@cluster1.stkfuu0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dburl, {
  useUnifiedTopology : true ,
  
  });
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

app.get('/' ,(req,res)=>{
    res.render("home");
}) 
app.get('/developer',(req,res)=>{
  res.render("dev");
})
app.get('/cse' ,(req,res)=>{
    res.render("cse");
}) 

app.get('/attendance', async (req, res) => {
  const { id } = req.query; // Access the 'id' query parameter
  
  try {
    // Fetch the data based on the provided ID (assuming you have a corresponding model)
    const found = await StudentsData.findOne({ rollnumber: id }); // Replace YourModel with your actual model name

    if (!found) {
      return res.status(404).send('Data not found');
    }

    // Render the template only if data is found
    res.render('test', { found });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data');
  }
});
app.use((err,req,res,next)=>{
  const {statusCode = 500} =err;
  if(!err.message) err.message ="oh no something went wrong"
  res.status(statusCode).render('error',{err})
})
const port=process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`listerning on port ${port}`)
})