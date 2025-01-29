import { Attendance, User, Subject } from '../models/index.js';

// Mark Attendance
export const markAttendance = async (req, res) => {
    const { studentId, subjectId, status, date } = req.body;

    try {
        const attendance = await Attendance.create({
            student: studentId,
            subject: subjectId,
            status,
            date,
        });

        res.status(201).json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Attendance by Student
export const getAttendanceByStudent = async (req, res) => {
    const { studentId } = req.params;

    try {
        const attendance = await Attendance.find({ student: studentId }).populate('subject');
        res.json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
