
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>ThoothuPet World</h4>
        <p>Your trusted online sports petting platform.</p>
      </div>
      <div className="footer-section">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="footer-section">
        <p>Follow Us</p>
        <div className="social-icons">
          <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/facebook-new.png" alt="Facebook" /> MARI RE</a>
          <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/twitter.png" alt="Twitter" />MARI</a>
          <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" alt="Instagram" />@Maari_killer2</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
