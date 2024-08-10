import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({

    jobName: {
        type: String, 
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter',
        required: true
    },
    applicantsApplied: [{
        type: mongoose.Schema.Types.ObjectId
    }]

}, {
    timestamps: true
});

const Job = mongoose.model('Job', jobSchema);
export default Job;
