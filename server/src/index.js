import express from 'express';
import 'dotenv/config'
import connectDB from './config/db.config.js';
import recruiterRouter from './routes/recruiter.route.js';
import applicantRouter from './routes/applicant.route.js';
import cors from 'cors';

const app = express(); 
const port = process.env.PORT || 3000; 

app.use(express.json()); // post will not work -> middleware to parse json
app.use(cors());

app.use('/recruiter', recruiterRouter);
app.use('/applicant', applicantRouter);

app.get("/", (req, res) => { 
    res.send("Working fine");
});

connectDB();

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/`);
});
