import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <h2 className="footer-brand-title">
            MyStore
          </h2>

          <p className="footer-text">
            Your favorite place to shop online.
          </p>
        </div>

        <div>
          <h3 className="footer-title">
            Quick Links
          </h3>

          <div className="footer-links">
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">Products</a>
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">
            Contact Us
          </h3>

          <p className="footer-text">
            support@mystore.com
          </p>

          <p className="footer-text">
            +20 100 123 4567
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 MyStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;