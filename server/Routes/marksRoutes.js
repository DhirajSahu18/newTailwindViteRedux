import express from 'express';
import { addMarks, getMarksByStudent } from '../controllers/marksController.js';
import { protect, restrictTo } from '../middleware/authMiddleware.js';

const router = express.Router();

// Add marks (Admin/Teacher only)
router.post('/', protect, restrictTo('admin', 'teacher'), addMarks);

// Get marks by student ID (Student only)
router.get('/:studentId', protect, restrictTo('student'), getMarksByStudent);

export default router;
