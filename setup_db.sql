CREATE TABLE IF NOT EXISTS Courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    instructor VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image TEXT,
    description TEXT,
    level VARCHAR(50),
    duration VARCHAR(50),
    availableSpots INT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO Courses 
(title, instructor, price, image, description, level, duration, availableSpots, createdAt, updatedAt) 
VALUES 
(
    'React - The Complete guide (incl. Next.js, Redux)', 
    'Sara Korhonen', 
    57.87, 
    'https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg', 
    'Master modern front-end development with React. This course provides a complete learning path for building powerful, scalable, and production-ready web applications using React and its most important ecosystem tools.', 
    'Intermediate', 
    '45 hours', 
    22, 
    NOW(), 
    NOW()
),
(
    'Master Java Design Patterns', 
    'Marta Soncini', 
    32.88, 
    'https://img-c.udemycdn.com/course/240x135/6579137_e43e.jpg', 
    'You will begin by mastering Java fundamentals, object-oriented programming, and advanced features such as multithreading, collections, and frameworks for enterprise-level development. Then, you ll transition to React, where you learn how to create interactive user interfaces.', 
    'Advanced', 
    '55 hours', 
    10, 
    NOW(), 
    NOW()
);