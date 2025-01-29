import mongoose from 'mongoose';

const marksSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subject',
            required: true,
        },
        marks: {
            type: Number,
            required: true,
        },
        maxMarks: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Marks = mongoose.model('Marks', marksSchema);

export default Marks;
