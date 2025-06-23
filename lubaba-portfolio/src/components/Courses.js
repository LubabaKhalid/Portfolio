import React from 'react';
import './Courses.css';

const Courses = () => {
  const courseList = [
    'Programming Fundamentals',
    'Introduction to Computer Science',
    'Statistics for Data Science',
    'Introduction to Data Science',
    'Computer Organization and Assembly Language',
    'Data Visualization',
    'Artificial Intelligence',
    'Data Warehouse',
    'Operating Systems',
    'Software Engineering',
  ];

  return (
    <div className="courses-container">
      <h1>Courses</h1>
      <ol>
        {courseList.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ol>
    </div>
  );
};

export default Courses;
