import React from "react";
import "./footer.css"; // Include this file for styles

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>contact info</h3>
          <a href="#">
            <i className="fas fa-phone"></i> +123-852-4565
          </a>
          <a href="#">
            <i className="fas fa-phone"></i> +123-852-4565
          </a>
          <a href="mailto:mayanksinghbora19@gmail.com">
            <i className="fas fa-envelope"></i> mayanksinghbora19@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-map"></i> phagwara, Punjab
          </a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#">
            <i className="fas fa-arrow-right"></i> home
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> about
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> rooms
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> gallery
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> reservation
          </a>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <a href="#">
            <i className="fas fa-arrow-right"></i> refund policy
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> privacy policy
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> need help
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> payments policy
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> customer care
          </a>
        </div>
      </div>
      <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-pinterest"></a>
      </div>
      <div className="credit">
        &copy; copyright @ 20 APR 2024 by <span>GIGACHU</span>
      </div>
    </section>
  );
};

export default Footer;
