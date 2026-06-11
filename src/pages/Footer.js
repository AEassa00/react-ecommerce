import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer bg-dark text-light rounded-top-circle  ">
      <div className="container">
        <div className=" text-center p-3  mb-3">
          <h6>Copyright &copy; 2026</h6>
        </div>
        <div className="grid container row text-center ">
          <div className="col-4 text-start">
            <h3> Help & Support</h3>
            <div className="contact d-flex flex-column justify-content-center align-items-start  mt-3 ml-2">
              <i className="bi bi-geo-alt-fill d-block mb-3"> Aswan, Egypt</i>
              <i className="bi bi-telephone d-block mb-3"> +20 123 456 789</i>
              <i className="bi bi-envelope-fill d-block">
                {" "}
                support@company.com
              </i>
            </div>
            <div className="group-icon d-flex justify-content-start align-items-center gap-3 mt-3">
              <i className="bi bi-facebook"></i>

              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-whatsapp"></i>
            </div>
          </div>
          <div className="col-2 text-start">
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
          <div className="col-3">
            <h3>Quick Link</h3>
            <div>
              <Link to="/About" className="nav-link active mb-3" aria-current="page">
                About Us
              </Link>
            </div>
          </div>
          <div className="col-3">
            <h3>Download App</h3>
          </div>
        </div>
        <h6 className="text-center mt-3 mb-0 pb-3">Designed by Abdallah</h6>
      </div>
    </div>
  );
}
