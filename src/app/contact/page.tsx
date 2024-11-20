"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For form submission status

  // Handle form data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform validation or send data to an API here
    setStatus("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <h1 className="contact-title heading">Contact <span> Me</span></h1>
      <p className="contact-description">
        Feel free to reach out to me via email or through the form below. I'm always open to new opportunities and collaborations!
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            rows={5}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      {/* Submission Status */}
      {status && <p className="status-message">{status}</p>}

      {/* Contact Info */}
      <div className="contact-info">
        <h2 className="contact-info-title">Contact Information</h2>
        <p className="contact-info-description">
          You can also reach me via email at <a href="mailto:your.email@example.com"> your.email@example.com or use this form to share your thoughts and ideas. 
          I'm always excited to collaborate and discuss new opportunities!</a>.
        </p >
        <p className="contact-info-description">
          Thank you for taking the time to reach out—I'll make sure to respond as quickly as possible.
        </p>
        </div>


     

      
    </section>
  );
}
