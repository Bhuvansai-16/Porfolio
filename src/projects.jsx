const projects = [
  {
    category: 'AI/ML Projects',
    items: [
      {
  title: 'Linguista - Your Ultimate NLP bot',
  description:
    'An educational NLP chatbot that performs various NLP tasks using NLTK and spaCy, including sentiment analysis, tokenization, POS tagging, and more.',
  tech: ['Python', 'FastAPI', 'spaCy', 'NLTK', 'HTML/CSS'],
  github: 'https://github.com/Bhuvansai-16/Linguista.git',
},
{
  title: 'AI Grammar Checker',
  description:
    'A real-time grammar correction tool that detects and corrects grammatical errors in user-submitted text using deep learning and NLP techniques.',
  tech: ['Node.js', 'Express', 'JavaScript', 'NLP', 'Deep Learning'],
  github: 'https://github.com/Bhuvansai-16/Grammar_Checker.git',
}
,
      {
        title: 'Iris Classification',
        description:
          'A machine learning model that classifies Iris flowers based on sepal and petal measurements.',
        tech: ['Python', 'scikit-learn', 'Pandas'],
        github: 'https://github.com/Bhuvansai-16/iris-classification',
        demo: "https://varikuntlasaimanoj.github.io/FLORA-ID/MAIN.html"
      },
      {
        title: 'Sign Board Detection',
        description:
          'Deep learning model for real-time sign board detection using OpenCV and TensorFlow.',
        tech: ['Python', 'TensorFlow', 'OpenCV'],
        github: 'https://github.com/Bhuvansai-16/sign-board-detection',
      },
         {
        title: 'Heart Disease Prediction',
        description:
          ' Built an intuitive Streamlit UI for data input and results.Trained a Random Forest classifier for prediction(13 parameters).Integrated SQLite to store user prediction history with input summary and suggestions.Designed an Admin dashboard to manage user insights',
        tech: ['Python', 'scikit-learn', 'Pandas', 'Streamlit', 'SQLite'],
        github: 'https://github.com/Bhuvansai-16/HeartDiseaseprediction',
        demo: "https://heart-disease-predicter-dfwa4lfqwfccvpyd3h6s.streamlit.app/"
      },
      {
        title: 'AI Agent Dashboard',
        description:
          'AI agent that reads through a dataset CSV or Google Sheets and performs a web search to retrieve specific information for each entity',
        tech: ['Python', 'Gemini', 'Google Sheets API', 'Google Search API'],
        github: 'https://github.com/Bhuvansai-16/Ai_agent_.git',
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
        demo: 'https://celebrated-licorice-1e9237.netlify.app/#',
      },
      {
        title: 'Weather Application',
        description:
          'Real-time weather application using OpenWeather API..',
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
