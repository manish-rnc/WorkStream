import mongoose from 'mongoose';

const recruiterSchema = new mongoose.Schema({

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
    jobsPosted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }]

}, {
    timestamps: true
});

const Recruiter = mongoose.model('Recruiter', recruiterSchema);
export default Recruiter;
