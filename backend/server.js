const connectToMongo = require('./config/db.js');
const express = require('express');
const bodyParser = require("body-parser")
const cors = require("cors");
connectToMongo();
const app = express();
const port = 5000;
const Courses=require('./routes/CourseRoute.js')
const Chapters=require('./routes/ChapterRoute.js')
app.use(bodyParser({extended:true}))
app.use(cors())
app.use(express.json());




app.use('/api/auth' , require('./routes/auth'))
app.use('/api/courses',Courses)
app.use('/api/chapters',Chapters)
// app.use('/api/notes' , require('./routes/notes'))

app.listen(port , ()=>{
    console.log(`App listening at http://localhost:${port}`)
})





