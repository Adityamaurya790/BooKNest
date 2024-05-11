
import express from 'express'
import dotenv from 'dotenv'
import mongoose  from 'mongoose';
import bookRoute from './routes/book.routes.js'
import cors from 'cors';



const app = express()
app.use(cors());
const PORT = process.env.PORT || 4000;

// connecting code to mongodb database for backend
const mongoURI = "mongodb+srv://adityamaurya790:1234%40aditya@cluster0.hha1kik.mongodb.net/book";
mongoose.connect(mongoURI, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });


  // routes ko define karenge abb
  app.use('/book',bookRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})