import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        class: {
            type: String,
            required: true,
        },
        batches: [
            {
                type: String, // E.g., "Batch 1", "Batch 2"
            },
        ],
    },
    { timestamps: true }
);

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;
