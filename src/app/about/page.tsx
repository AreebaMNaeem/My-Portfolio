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
            Hello! I'm Areeba Naeem, a distinguished Web Developer who excels in
            the art of crafting impeccable digital experiences, leveraging my
            expertise in Frontend Development, React, Firebase, and WordPress.
            My fervor for UI/UX design ensures that each project I undertake
            transcends mere functionality to achieve a harmonious blend of
            aesthetic brilliance and intuitive user experience. Complementing my
            core competencies, I possess a robust acumen in Digital Marketing
            and Upwork, enabling me to deliver holistic and strategic solutions
            that propel success in the ever-evolving digital realm. Let us
            embark on a journey to create extraordinary digital masterpieces
            together.
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
