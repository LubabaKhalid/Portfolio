// src/pages/Home.js
import React from 'react';
import lubabaImg from '../assets/lubaba.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        <div style={styles.box}>
          <h2><Link to="/" style={styles.link}>Lubaba Khalid</Link></h2>
          <small style={styles.small}>
            Lubaba Khalid is a student at the Department of Data Science, University of the Punjab (PU), Lahore, Pakistan.
          </small>
        </div>

        <div style={styles.box}>
          <p><strong>GitHub Profile:</strong></p>
          <small style={styles.small}>
            <a href="https://github.com/LubabaKhalid" target="_blank" rel="noreferrer" style={styles.link}>
              github.com/LubabaKhalid
            </a>
          </small>
        </div>

        <div style={styles.box}>
          <p><strong>LinkedIn Profile:</strong></p>
          <small style={styles.small}>
            <a href="https://www.linkedin.com/in/lubaba-khalid-a42147319/" target="_blank" rel="noreferrer" style={styles.link}>
              linkedin.com/in/lubaba-khalid
            </a>
          </small>
        </div>

        <div style={styles.box}>
          <p><strong><Link to="/courses" style={styles.link}>Courses</Link></strong></p>
          <small style={styles.small}>Overview of courses taken.</small>
        </div>

        <div style={styles.box}>
          <p><strong><Link to="/hobbies" style={styles.link}>Hobbies</Link></strong></p>
          <small style={styles.small}>Overview of hobbies acquired.</small>
        </div>

        <div style={styles.box}>
          <p><strong><Link to="/languages" style={styles.link}>Languages</Link></strong></p>
          <small style={styles.small}>Programming languages known.</small>
        </div>

        <div style={styles.box}>
          <p><strong><Link to="/contact" style={styles.link}>Contact</Link></strong></p>
          <small style={styles.small}>Your message is important to me.</small>
        </div>
      </div>

      <div style={styles.imageWrapper}>
        <img src={lubabaImg} alt="Lubaba Khalid" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1000px',
    margin: '30px auto',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  textSection: {
    flex: 1,
    minWidth: '300px',
    marginRight: '20px',
  },
  box: {
    marginBottom: '20px',
  },
  link: {
    color: '#004aad',
    textDecoration: 'none',
  },
  small: {
    fontSize: '14px',
    color: '#555',
  },
  imageWrapper: {
    maxWidth: '250px',
    width: '100%',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Home;
