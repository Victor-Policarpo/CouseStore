import express from 'express';
import Course from '../model/Course.js';

const app = express.Router();

app.post('/', async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (error){
        res.status(400).json({ error: error.message });
    }
});

app.get('/', async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.patch('/:id', async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        await course.update(req.body); 
        res.status(200).json(course);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/:id', async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        } 

        await course.destroy();
        res.status(204).send();

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default app;