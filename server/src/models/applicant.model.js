import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    qualification: {
        type: String, 
        required: true
    },
    skills: [{
        type: String
    }],
    jobsApplied: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }]

}, {
    timestamps: true
});

const Applicant = mongoose.model('Applicant', applicantSchema);
export default Applicant;
