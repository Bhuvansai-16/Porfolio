

const projects = [
  {
    category: 'AI/ML Projects',
    items: [
      {
        title: 'Iris Classification',
        description:
          'A machine learning model that classifies Iris flowers based on sepal and petal measurements.',
        tech: ['Python', 'scikit-learn', 'Pandas'],
        github: 'https://github.com/Bhuvansai-16/iris-classification',
      },
      {
        title: 'Sign Board Detection',
        description:
          'Deep learning model for real-time sign board detection using OpenCV and TensorFlow.',
        tech: ['Python', 'TensorFlow', 'OpenCV'],
        github: 'https://github.com/Bhuvansai-16/sign-board-detection',
      },
      {
        title: 'AI Agent Dashboard',
        description:
          'AI agent that reads through a dataset (CSV or Google Sheets) and performs a web search to retrieve specific information for each entity in a chosen column',
        tech: ['Python', 'streamlit', 'Gemini', 'Google Sheets API', 'Google Search API'],
        github: 'https://github.com/Bhuvansai-16/sign-board-detection',
      },
    ],
  },
  {
    category: 'Web Development',
    items: [
      {
        title: 'Netflix Clone',
        description:
          'A responsive Netflix clone built with modern web technologies.',
        tech: ['React', 'CSS', 'JavaScript'],
        github: 'https://github.com/Bhuvansai-16/netflix-clone',
        demo: 'https://netflix-clone-demo.netlify.app',
      },
      {
        title: 'Weather Application',
        description:
          'Real-time weather application using OpenWeather API.',
        tech: ['JavaScript', 'API', 'CSS'],
        github: 'https://github.com/Bhuvansai-16/weather-app',
        demo: 'https://weather-app-demo.netlify.app',
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1 className="section-title">Projects</h1>
      {projects.map((category, index) => (
        <div key={index} className="category">
          <h2 className="category-title">{category.category}</h2>
          <div className="projects-container">
            {category.items.map((project, projectIndex) => (
              <div key={projectIndex} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
