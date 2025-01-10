const About = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="about-title">About Me</h1>
      <p className="about-description">
        Hello! I'm Bhuvansai, a Gen Z enthusiast with a deep passion for technology and space. My journey into web development and machine learning has been nothing short of exciting.
      </p>

      <div className="about-skills">
        <div className="skill-category">
          <div className="skill-icon">
            <span role="img" aria-label="Web Development">&#128187;</span>
          </div>
          <h3>Web Development</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>React.js, Node.js</li>
            <li>MongoDB, MySQL</li>
            <li>Git, GitHub</li>
          </ul>
        </div>
        <div className="skill-category">
          <div className="skill-icon">
            <span role="img" aria-label="Machine Learning">&#129302;</span>
          </div>
          <h3>Machine Learning</h3>
          <ul>
            <li>Python, TensorFlow</li>
            <li>OpenCV, Neural Networks</li>
            <li>Pandas, Matplotlib</li>
            <li>Scikit-learn</li>
          </ul>
        </div>
      </div>

      <div className="about-beyond">
        <div className="beyond-icon">
          <span role="img" aria-label="Beyond Tech">&#127760;</span>
        </div>
        <h3>Beyond Tech</h3>
        <p>
          Apart from tech, I have a keen interest in space and astronomy. Learning about the universe and its mysteries inspires me to keep pushing the frontiers of knowledge.
        </p>
      </div>
      
    </section>
  );
};

export default About;
