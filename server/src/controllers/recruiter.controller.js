import Job from '../models/job.model.js';
import Recruiter from '../models/recruiter.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 8);
        const recruiter = new Recruiter({ name, email, password: hashedPassword });
        await recruiter.save();
        res.status(201).json({ message: "Successfully registered" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const recruiter = await Recruiter.findOne({ email });
        if (!recruiter) {
            return res.status(400).json({ message: "Invalid email" });
        }

        const isMatch = await bcrypt.compare(password, recruiter.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ userId: recruiter._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const addJob = async (req, res) => {

    try {
        await Job.create(req.body);
        res.status(201).json({ message: "job added successfully" });
    }
    catch (error) {
        res.status(400).json(req.body);
    }

};

const getAllJobs = async (req, res) => {
    
    try {
        const jobs = await Job.find({ recruiter: req.userId });
        res.json(jobs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

const updateJob = async (req, res) => {

    try {
        const { id } = req.params;
        const job = await Job.findOneAndUpdate({ "_id": id }, req.body, { new: true });
        if (job) {
            res.status(200).json({ message: "deleted successfully" });
        }
        else {
            res.status(400).json({ message: "job not found" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }

};

const deleteJob = async (req, res) => {

    try {
        const { id } = req.params;
        console.log(id);
        const job = await Job.findOneAndDelete({ "_id": id });
        if (job) {
            res.status(200).json({ message: "deleted successfully" });
        }
        else {
            res.status(400).json({ message: "job not found" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }

};

export { register, login, addJob, getAllJobs, updateJob, deleteJob };
