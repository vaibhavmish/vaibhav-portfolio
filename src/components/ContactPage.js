import React, { useState } from "react";
import "./ContactPage.css"; // Import your CSS for styling

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
});

  // State to manage form submission status
  const [formStatus, setFormStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus("Please enter a valid email address.");
      return;
    }

    // Here, handle form submission logic (e.g., sending an email)
    // You can use Formspree, EmailJS, or your back-end API.

    // Clear the form and display success message
    setFormData({ name: "", email: "", subject: "", message: "" });
    setFormStatus("Message sent successfully!");
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to send me a message.</p>

      {/* Display form status messages */}
      {formStatus && <p className="form-status">{formStatus}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter the subject"
          required
        />

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          rows="5"
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
