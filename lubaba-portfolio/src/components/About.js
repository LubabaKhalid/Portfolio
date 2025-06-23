import React from 'react';
import './About.css';
import lubabaImg from 'lubaba-portfolio\src\assets\WhatsApp Image 2024-10-20 at 18.16.00.jpeg';
const About = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-item"><a href="/"><span className="material-icons">info</span>Home</a></div>
        <div className="nav-item"><a href="/courses"><span className="material-icons">book</span>Courses</a></div>
        <div className="nav-item"><a href="/languages"><span className="material-icons">language</span>Languages</a></div>
        <div className="nav-item"><a href="/contact"><span className="material-icons">contact_mail</span>Contact</a></div>
        <div className="nav-item"><a href="/hobbies"><span className="material-icons">star</span>Hobbies</a></div>
      </nav>

      <div className="container">
        <div className="image-container">
          <img src={lubabaImg}  alt="Lubaba Khalid" />
          <h4><b>Lubaba Khalid</b></h4>
        </div>
        <div className="text">
          <h2><b>About Me</b></h2>
          <p>
            Hello! I’m Lubaba Khalid, a passionate Data Science student at the University of the Punjab in Lahore, Pakistan. I began my educational journey in a government school, where I developed a strong foundation in mathematics and science. I completed my Intermediate in Computer Science (ICS) at a government college, where I discovered my fascination for data analysis and programming.
          </p>
          <p>
            Currently, I am honing my skills in data science, learning to extract insights and drive decision-making through the power of data. I enjoy tackling complex problems and am excited about the endless possibilities within this field.
          </p>
          <p>
            In my spare time, I love exploring new technologies, working on projects, and engaging with the data science community. I’m eager to connect with like-minded individuals and collaborate on innovative solutions that make a difference.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
