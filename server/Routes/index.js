import express from 'express';
import authRoutes from './authRoutes.js';
import subjectRoutes from './subjectRoutes.js';
import attendanceRoutes from './attendanceRoutes.js';
import marksRoutes from './marksRoutes.js';

const router = express.Router();

// Auth routes
router.use('/auth', authRoutes);

// Subject routes
router.use('/subjects', subjectRoutes);

// Attendance routes
router.use('/attendance', attendanceRoutes);

// Marks routes
router.use('/marks', marksRoutes);

export default router;
