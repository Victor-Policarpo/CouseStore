import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('course_store', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;