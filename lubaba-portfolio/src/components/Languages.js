import React from 'react';
import './Languages.css';

const techStack = [
  {
    name: 'HTML',
    description: '(HyperText Markup Language) - For structuring web pages.',
    icon: 'https://cdn-icons-png.flaticon.com/512/888/888859.png'
  },
  {
    name: 'Python',
    description: 'Often used with frameworks like Django or Flask for backend development.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png'
  },
  {
    name: 'C',
    description: 'A powerful, low-level programming language known for system programming and performance.',
    icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png'
  },
  {
    name: 'C++',
    description: 'An extension of C that incorporates object-oriented features for complex software development.',
    icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png'
  },
  {
    name: 'Django',
    description: 'A high-level Python web framework that encourages rapid development and clean design.',
    icon: 'https://static.djangoproject.com/img/logos/django-logo-positive.svg',
    customSize: '80px'
  },
  {
    name: 'SQL',
    description: 'A standard language for managing and querying relational databases.',
    icon: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png'
  }
];

const Languages = () => {
  return (
    <div className="languages-container">
      <h1>Languages & Technologies</h1>
      <div className="tech-section">
        {techStack.map((tech, idx) => (
          <div className="card" key={idx}>
            <img
              src={tech.icon}
              alt={`${tech.name} Icon`}
              style={{ width: tech.customSize || '90px' }}
            />
            <h2>{tech.name}</h2>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
