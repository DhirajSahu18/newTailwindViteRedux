import express from 'express';
import { addSubject, getSubjects } from '../controllers/subjectController.js';
import { protect, restrictTo } from '../middleware/authMiddleware.js';

const router = express.Router();

// Add a new subject (Admin only)
router.post('/', protect, restrictTo('admin'), addSubject);

// Get all subjects (Any role)
router.get('/', protect, getSubjects);

export default router;
