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

  const studentsToInsert = [
  ]
  
  // Use insertMany to insert all students at once
  StudentsData.insertMany(studentsToInsert)
    .then(docs => {
      console.log('Inserted students:', docs);
    })
    .catch(err => {
      console.error('Error inserting students:', err);
    });