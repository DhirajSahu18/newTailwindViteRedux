import { Marks, User, Subject } from '../models/index.js';

// Add Marks
export const addMarks = async (req, res) => {
    const { studentId, subjectId, marks, maxMarks } = req.body;

    try {
        const markEntry = await Marks.create({
            student: studentId,
            subject: subjectId,
            marks,
            maxMarks,
        });

        res.status(201).json(markEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Marks by Student
export const getMarksByStudent = async (req, res) => {
    const { studentId } = req.params;

    try {
        const marks = await Marks.find({ student: studentId }).populate('subject');
        res.json(marks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
