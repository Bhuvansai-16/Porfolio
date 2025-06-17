import { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_hd35fpf", // Replace with your EmailJS Service ID
        "template_4ddsk78", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "jALnl3I_Jfz4mNz2m" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="contact-heading">Get in Touch</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Enter your name"
          required
          className="contact-input"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          aria-label="Enter your email"
          required
          className="contact-input"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          aria-label="Enter your message"
          required
          className="contact-textarea"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="contact-button" aria-label="Send message">
          Send
        </button>
      </form>
      {status && <p className="contact-status">{status}</p>}
      <div className="social-links">
        <Link
          to="#"
          onClick={() => window.open("https://www.linkedin.com/in/bhuvansaich", "_blank", "noopener,noreferrer")}
          className="social-link"
        >
          LinkedIn
          <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
        </Link>
        <Link
          to="#"
          onClick={() => window.open("https://github.com/Bhuvansai-16", "_blank", "noopener,noreferrer")}
          className="social-link"
        >
          GitHub
          <img src="https://img.icons8.com/material-outlined/48/FFFFFF/github.png" alt="GitHub" />
        </Link>
        <a
  href="/Bhuvansai_Resume.pdf"
  download="Bhuvansai_Resume.pdf"
  className="social-link"
>
          Resume
          <img src="https://img.icons8.com/ios-filled/50/FFFFFF/open-resume.png" alt="Resume" />
        </Link>
      </div>
    </section>
  );
}

export default Contact;
