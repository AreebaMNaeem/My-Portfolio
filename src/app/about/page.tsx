import Image from "next/image";
import React from "react";

export default function About() {
  return (
    // About Section
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image">
          <Image
            draggable="false"
            className="tilt"
            src="/assets/me1.png" // replace with actual path in your public folder
            alt="Areeba Naeem"
            width={250}
            height={250} // Adjust width and height as needed
          />
        </div>
        <div className="content">
          <h3>I'm Areeba Naeem</h3>
          <span className="tag">Software Engineer | Web Developer</span>

          <p>
            Hi, I’m Areeba Naeem, a passionate Frontend Developer with expertise in React, Next.js, and WordPress.
            I specialize in crafting seamless and engaging web experiences that go beyond functionality, delivering 
            intuitive and visually appealing designs.With a talent for UI design using Figma, I ensure that every 
            interface is both user-friendly and aesthetically refined. Additionally, my content writing skills allow
            me to effectively communicate ideas, creating a strong connection between design and functionality.I am 
            committed to innovation and excellence, striving to deliver solutions that cater to the evolving needs 
            of users and businesses alike. Whether it’s developing websites or collaborating on creative projects,
            I aim to make a meaningful impact in the digital space.Let’s work together to transform your vision 
            into reality and create something extraordinary!
          </p>

          <div className="box-container">
            <div className="box">
              <p>
                <span>Age: </span> 20
              </p>
              <p>
                <span>Phone: </span> +92 349-130-3247
              </p>
            </div>
            <div className="box">
              <p>
                <span>Email: </span> areebanaeem350@gmail.com
              </p>
              <p>
                <span>Place: </span> Karachi, Pakistan
              </p>
            </div>
          </div>

          <div className="resumebtn">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer" // Added for security with target="_blank"
              className="btn"
            >
              <span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
