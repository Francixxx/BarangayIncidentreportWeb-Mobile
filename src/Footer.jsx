import React from "react";

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section about">
        <h3>PatrolTrack</h3>
        <p>Providing efficient patrol management and community safety solutions for barangay tanods.</p>
        <div className="contact">
          <span><i className="fas fa-phone"></i> +123-456-7890</span>
          <span><i className="fas fa-envelope"></i> info@patroltrack.com</span>
        </div>
        <div className="socials">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div className="footer-section additional-info">
        <h3>Operating Hours</h3>
        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
        <p>Saturday: 9:00 AM - 1:00 PM</p>
        <p>Sunday: Closed</p>
        <div className="address">
          <h3>Address</h3>
          <p>123 Barangay Street</p>
          <p>City, Province 1234</p>
          <p>Philippines</p>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} PatrolTrack | Barangay Tanod Patrol Optimization System | All rights reserved
    </div>
  </footer>
  );
}

export default Footer;