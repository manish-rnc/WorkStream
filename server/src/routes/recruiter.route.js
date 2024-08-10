import express from 'express';
import { addJob, deleteJob, getAllJobs, login, register, updateJob } from '../controllers/recruiter.controller.js';
import isAuthenticated from '../middlewares/auth.middleware.js';

const recruiterRouter = express.Router();

recruiterRouter.post('/register', register);
recruiterRouter.post('/login', login);
recruiterRouter.post('/addJob', isAuthenticated, addJob);
recruiterRouter.get('/getAllJobs', isAuthenticated, getAllJobs);
recruiterRouter.put('/update/:id', isAuthenticated, updateJob);
recruiterRouter.delete('/delete/:id', isAuthenticated, deleteJob);

export default recruiterRouter;
