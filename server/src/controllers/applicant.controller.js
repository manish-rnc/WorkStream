import Applicant from "../models/applicant.model.js";
import Job from "../models/job.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const register = async (req, res) => {

    try {
        await Applicant.create(req.body);
        res.status(201).json({ message: "Successfully registered" });
    }
    catch(error) {
        res.status(400).json(req.body);
    }

};

const login = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        const applicant = await Applicant.findOne({ email });
        if(!applicant) {
            return res.status(400).json({ message: "Invalid email"});
        }
        
        const isMatch = await bcrypt.compare(password, applicant.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ userId: applicant._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({message: "Login successful", token});
    }
    catch(error) {
        res.status(400).json({ message: error.message });
    }
    
};

const applyJobs = async (req, res) => {
    
    try {
        const jobs = await Job.find();
        res.json(jobs);
    }
    catch(error) {
        res.status(400).json(error);
    }

};

export { register, login, applyJobs };
