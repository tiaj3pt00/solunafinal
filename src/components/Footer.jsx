const Footer = () => {
  return (
    <div className="footer-container">
      {/* Main Footer Content */}
      <section className="row footer-background py-5 px-4">
        {/* About Us Section */}
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <div className="footer-section about-section">
            <h5 className="section-title">About Soluna</h5>
            <div className="divider"></div>
            <p className="about-text">
              Soluna offers a diverse range of jewelry, from fashion jewelry to fine jewelry, 
              all showcasing the brand's signature style and craftsmanship. Our collections 
              include necklaces, pendants, bracelets, rings, and earrings.
            </p>
            <p className="about-text">
              Created by master jewelers, these pieces incorporate precious metals, 
              gemstones, and diamonds, resulting in high-quality, timeless designs like 
              the Volt, B Blossom, and Idylle Blossom collections.
            </p>
            <div className="jewelry-icon">
              <i className="fas fa-gem"></i>
              <i className="fas fa-ring"></i>
              <i className="fas fa-necklace"></i>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <div className="footer-section contact-section">
            <h5 className="section-title">Reach Out To Us</h5>
            <div className="divider"></div>
            <form className="contact-form">
              <div className="form-group">
                <input
                  className="form-control input-field"
                  type="email"
                  placeholder="Your email address"
                  required
                />
                <i className="fas fa-envelope input-icon"></i>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control input-field"
                  rows="4"
                  placeholder="Your message..."
                  required
                ></textarea>
                <i className="fas fa-comment input-icon"></i>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="col-lg-4 col-md-12">
          <div className="footer-section social-section">
            <h5 className="section-title">Connect With Us</h5>
            <div className="divider"></div>
            <p className="social-text">
              ✨ We'd love to be part of your sparkle story! Whether you have a question 
              about our collections, need help finding the perfect piece, or simply want 
              to share your shine, we're here for you.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" className="social-link instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://x.com" className="social-link twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://pinterest.com" className="social-link pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
            <div className="newsletter">
              <h6>Subscribe to our newsletter</h6>
              <div className="newsletter-input">
                <input type="email" placeholder="Your email" />
                <button><i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="copyright-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-left text-center mb-2 mb-md-0">
              <p className="mb-0">
                &copy; 2025 Soluna Jewelry. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-right text-center">
              <p className="mb-0 developer-credit">
                Crafted with <i className="fas fa-heart"></i> by Tia Jeptoo
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a href="#top" className="back-to-top">
        <i className="fas fa-arrow-up"></i>
      </a>

      {/* Add the following CSS (either in a separate file or as styled-components) */}
      <style jsx>{`
        .footer-container {
          position: relative;
          overflow: hidden;
        }
        
        .footer-background {
          background: linear-gradient(135deg,rgb(11, 171, 192) 0%, #16213e 100%);
          color: #fff;
          padding: 3rem 0;
          position: relative;
        }
        
        .footer-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
        }
        
        .footer-section {
          padding: 0 1.5rem;
          position: relative;
          height: 100%;
        }
        
        .section-title {
          color: #00d2ff;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          position: relative;
          text-align: center;
        }
        
        .divider {
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
          margin: 0 auto 1.5rem auto;
        }
        
        .about-text {
          color: #e6e6e6;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
        
        .jewelry-icon {
          text-align: center;
          margin-top: 1.5rem;
        }
        
        .jewelry-icon i {
          font-size: 1.5rem;
          margin: 0 0.5rem;
          color: #00d2ff;
          transition: all 0.3s ease;
        }
        
        .jewelry-icon i:hover {
          transform: rotate(15deg) scale(1.2);
          color: #fff;
        }
        
        .contact-form {
          margin-top: 1rem;
        }
        
        .form-group {
          position: relative;
          margin-bottom: 1.5rem;
        }
        
        .input-field {
          background-color: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 0;
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          padding-left: 2rem;
          transition: all 0.3s ease;
        }
        
        .input-field:focus {
          background-color: rgba(255, 255, 255, 0.15);
          border-bottom-color: #00d2ff;
          box-shadow: none;
          color: #fff;
        }
        
        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .input-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.5);
        }
        
        .submit-btn {
          background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
          border: none;
          border-radius: 30px;
          padding: 0.5rem 1.5rem;
          color: white;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 210, 255, 0.3);
        }
        
        .social-text {
          color: #e6e6e6;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 0 0.5rem;
          color: white;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .facebook {
          background: linear-gradient(45deg, #3b5998, #0078d7);
        }
        
        .instagram {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        }
        
        .twitter {
          background: linear-gradient(45deg, #1da1f2, #009ff5);
        }
        
        .pinterest {
          background: linear-gradient(45deg, #e60023, #ad081b);
        }
        
        .social-link:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .newsletter {
          margin-top: 2rem;
        }
        
        .newsletter h6 {
          color: #00d2ff;
          text-align: center;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .newsletter-input {
          display: flex;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          overflow: hidden;
        }
        
        .newsletter-input input {
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          padding: 0.5rem 1rem;
          color: white;
        }
        
        .newsletter-input input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .newsletter-input button {
          background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
          border: none;
          color: white;
          padding: 0 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .newsletter-input button:hover {
          background: linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%);
        }
        
        .copyright-footer {
          background: #0f0f1a;
          padding: 1rem 0;
          color: #aaa;
          font-size: 0.9rem;
        }
        
        .developer-credit {
          color: #00d2ff;
        }
        
        .developer-credit i {
          color: #ff4d4d;
        }
        
        .back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          z-index: 99;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .back-to-top.active {
          opacity: 1;
          visibility: visible;
        }
        
        .back-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 210, 255, 0.3);
        }
        
        @media (max-width: 768px) {
          .footer-section {
            margin-bottom: 2rem;
            padding: 0;
          }
          
          .section-title {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;