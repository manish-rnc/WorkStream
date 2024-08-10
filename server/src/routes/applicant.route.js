import express from 'express';
import { applyJobs, login, register } from '../controllers/applicant.controller.js';
import isAuthenticated from '../middlewares/auth.middleware.js';

const applicantRouter = express.Router();

applicantRouter.post('/register', register);
applicantRouter.post('/login', login);
applicantRouter.get('/applyJobs', isAuthenticated, applyJobs);

export default applicantRouter;
