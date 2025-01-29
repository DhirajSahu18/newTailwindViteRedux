import express from 'express';
import { markAttendance, getAttendanceByStudent } from '../controllers/attendanceController.js';
import { protect, restrictTo } from '../middleware/authMiddleware.js';

const router = express.Router();

// Mark attendance (Admin/Teacher only)
router.post('/', protect, restrictTo('admin', 'teacher'), markAttendance);

// Get attendance by student ID (Student only)
router.get('/:studentId', protect, restrictTo('student'), getAttendanceByStudent);

export default router;
