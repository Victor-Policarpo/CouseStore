import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Course = db.define('Course', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    instructor: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.FLOAT, allowNull: false},
    level: {type: DataTypes.STRING, allowNull: false},
    duration: {type: DataTypes.STRING, allowNull: false},
    availableSpots: {type: DataTypes.INTEGER, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false}
});

export default Course;