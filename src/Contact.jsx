import { Link } from "react-router-dom"; // External CSS for more detailed styling

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <form className="contact-form">
      <h2 className="contact-heading">Get in Touch</h2>
        <input
          type="text"
          placeholder="Your Name"
          aria-label="Your Name"
          required
          className="contact-input"
        />
        <input
          type="email"
          placeholder="Your Email"
          aria-label="Your Email"
          required
          className="contact-input"
        />
        <textarea
          placeholder="Your Message"
          aria-label="Your Message"
          required
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
      <div className="social-links">
        <Link to="#" onClick={() => window.open("https://www.linkedin.com/in/bhuvansaich", "_blank", "noopener,noreferrer")} className="social-link">
          LinkedIn
          <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
        </Link>
        <Link to="#" onClick={() => window.open("https://github.com/Bhuvansai-16", "_blank", "noopener,noreferrer")} className="social-link">
          GitHub
          <img src="https://img.icons8.com/material-outlined/48/FFFFFF/github.png" alt="GitHub" />
        </Link>
        <Link to="#" onClick={() => window.open("CVResume.pdf", "_blank", "noopener,noreferrer")} className="social-link">
          Resume
          <img src="https://img.icons8.com/ios-filled/50/FFFFFF/open-resume.png" alt="Resume" />
        </Link>
      </div>
    </section>
  );
}

export default Contact;
