// models/Course.js
import db from '../config/db.js';

const Course = {
    findById: async (id) => {
        try {
            const [rows] = await db.execute('SELECT * FROM Courses WHERE id = ?', [id]);
            return rows.length > 0 ? rows[0] : null;
        } catch (error) {
            console.error("Erro no Model Course.findById:", error);
            throw error;
        }
    },

    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM Courses');
        return rows;
    },

    create: async (data) => {
        const { title, description, instructor, price, level, duration, availableSpots, image } = data;
        const now = new Date();

        const sql = `INSERT INTO Courses 
            (title, description, instructor, price, level, duration, availableSpots, image, createdAt, updatedAt) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        
        const [result] = await db.execute(sql, [
            title, description, instructor, price, level, duration, availableSpots, image, 
            now, now
        ]);
        
        return { id: result.insertId, ...data, createdAt: now, updatedAt: now };
    },

    update: async (id, data) => {
        const { title, description, instructor, price, level, duration, availableSpots, image } = data;
        const sql = `UPDATE Courses SET 
            title=?, description=?, instructor=?, price=?, level=?, duration=?, availableSpots=?, image=?, updatedAt=NOW()
            WHERE id=?`;
        
        await db.execute(sql, [
            title, description, instructor, price, level, duration, availableSpots, image, id
        ]);
    },

    destroy: async (id) => {
        await db.execute('DELETE FROM Courses WHERE id = ?', [id]);
    }
};

export default Course;