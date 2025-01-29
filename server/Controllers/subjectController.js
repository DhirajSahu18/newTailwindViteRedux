import { Subject } from '../models/index.js';

// Add Subject
export const addSubject = async (req, res) => {
    const { name, class: userClass, batches } = req.body;

    try {
        const subject = await Subject.create({
            name,
            class: userClass,
            batches,
        });

        res.status(201).json(subject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Subjects
export const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.json(subjects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
