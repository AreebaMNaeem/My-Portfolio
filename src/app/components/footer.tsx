import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Areeba's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with me over socials. <br />
            <br />
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <Link href="/">
            <i className="fas fa-chevron-circle-right"></i> Home
          </Link>
          <Link href="/about">
            <i className="fas fa-chevron-circle-right"></i> About
          </Link>
          <Link href="/skills">
            <i className="fas fa-chevron-circle-right"></i> Skills
          </Link>
          <Link href="/education">
            <i className="fas fa-chevron-circle-right"></i> Education
          </Link>
          <Link href="/contact">
            <i className="fas fa-chevron-circle-right"></i> Contact Me
          </Link>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-phone"></i> +92 349-130-3247
          </p>
          <p>
            <i className="fas fa-envelope"></i> areebanaeem350@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marked-alt"></i> Karachi | Pakistan
          </p>
          <div className="share">
            <a
              className="facebook"
              aria-label="Facebook"
              href="https://www.facebook.com/profile.php?id=100075464850301"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="instagram"
              aria-label="Instagram"
              href="https://www.instagram.com/areebaa.naeem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="linkedin"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/areeba-naeem-bse168/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
        
            <a
              className="github"
              aria-label="GitHub"
              href="https://github.com/AreebaMNaeem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <h1 className="credit">
        Designed & Developed <i className="fa fa-heart pulse"></i> by <a href="#">Areeba Naeem</a>
      </h1>
    </section>
  );
};

export default Footer;
