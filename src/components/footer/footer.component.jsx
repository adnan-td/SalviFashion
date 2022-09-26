import { Link } from "react-router-dom";
import "./footer.component.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="F-header">Dive into our Collections</p>
      <div className="F-button">
        <button>See Collections</button>
      </div>
      <div className="F-mid">
        <p>Salvifashion</p>
        <div className="F-mid-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="F-mid-social">
          <span>
            <i className="fa-brands fa-whatsapp"></i>
          </span>
          <span>
            <i className="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i className="fa-brands fa-instagram"></i>
          </span>
        </div>
      </div>
      <div className="F-line"></div>
      <div className="F-lower">
        <p>2022-2023 All Rights Reserved</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
