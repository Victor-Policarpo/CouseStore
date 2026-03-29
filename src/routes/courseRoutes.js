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

app.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const curso = await Course.findById(id); 
        
        if (!curso) {
            return res.status(404).json({ error: "Curso não encontrado" });
        }
        
        res.json(curso);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro no servidor" });
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

app.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const exists = await Course.findById(id);
        
        if (!exists) {
            return res.status(404).json({ error: 'Course not found' });
        }

        await Course.update(id, req.body); 
        res.status(200).json({ id, ...req.body });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const exists = await Course.findById(id);

        if (!exists) {
            return res.status(404).json({ error: 'Course not found' });
        } 

        await Course.destroy(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default app;