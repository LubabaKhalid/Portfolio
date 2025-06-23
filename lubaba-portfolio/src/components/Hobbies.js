import React from 'react';
import './Hobbies.css';

const hobbies = [
  {
    title: 'Cricket',
    description: 'A dynamic team sport that combines strategy and athleticism, fostering camaraderie and competition.'
  },
  {
    title: 'Painting',
    description: 'An expressive art form that allows for creativity and relaxation through color and technique.'
  },
  {
    title: 'Outing',
    description: 'Enjoying adventures and experiences outdoors, exploring new places and connecting with nature.'
  },
  {
    title: 'Listening to Music',
    description: 'Listening to music is a soothing escape that enhances moods, sparks creativity, and connects us to emotions and memories across diverse genres.'
  },
  {
    title: 'Sleep',
    description: 'A vital and rejuvenating activity that supports overall health and well-being.'
  },
  {
    title: 'Esports',
    description: 'Engaging in competitive gaming through mobile games and classic board games like Ludo, where strategy and skill come together for fun and rivalry.'
  }
];

const Hobbies = () => {
  return (
    <div className="container">
      <h1>Hobbies</h1>
      <div className="hobby-grid">
        {hobbies.map((hobby, index) => (
          <div className="hobby-card" key={index}>
            <h2>{hobby.title}</h2>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
