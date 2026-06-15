import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "../css/style.css";

export default function Footer() {
  return (
    <div className="footer bg-dark text-light rounded-top-5  ">
      <div className="container">
        <div className=" text-center p-3  mb-3">
          <h6>Copyright &copy; 2026</h6>
        </div>
        <div className="grid container row text-center ">
          <div className="col-lg-4 col-md-6 col-sm-12   text-start mb-3">
            <h3> Help & Support</h3>
            <div className="contact d-flex flex-column justify-content-center align-items-start  mt-3 ml-2">
              <a href="https://maps.google.com/?q=Aswan,+Egypt" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-geo-alt-fill d-block mb-3"> Aswan, Egypt</i>
              </a>
              <a href="tel:+201154552214">
                <i className="bi bi-telephone d-block mb-3"> +201154552214</i>
              </a>
              <a href="mailto:abdallaheassa1234@gmail.com">
                <i className="bi bi-envelope-fill d-block">
                  {" "}
                  abdallaheassa1234@gmail.com
                </i>
              </a>
            </div>
            <div className="group-icon d-flex justify-content-start align-items-center gap-3 mt-3">
              <a
                href="https://www.facebook.com/share/1CffeTmnhq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook icon"></i>
              </a>
              <a
                href="https://www.instagram.com/a_eassa00?igsh=MnZwMG12ZDFmYWJq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram iconi"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/abdallah-hamed-b108902b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin icon"></i>
              </a>
              <a
                href="https://wa.me/201154552214?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp iconw"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 text-start mb-3">
            <h3>Account</h3>
            <div>
              <Link
                to="/Products"
                className="nav-link active mb-3"
                aria-current="page"
              >
                Products
              </Link>
              <Link
                to="/Cart"
                className="nav-link active mb-3"
                aria-current="page"
              >
                Cart
              </Link>
              <Link
                to="/Favorites"
                className="nav-link active mb-3"
                aria-current="page"
              >
                Favorites
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 text-start mb-3">
            <h3>Quick Link</h3>
            <div>
              <Link
                to="/About"
                className="nav-link active mb-3"
                aria-current="page"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 text-start">
            <h3>Download App</h3>
          </div>
        </div>
        <h6 className="text-center mt-3 mb-0 pb-3">Designed by Abdallah</h6>
      </div>
    </div>
  );
}
