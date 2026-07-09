import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import ProtuctContext from "../context/cearteContext";
import FavriteIcon from "@mui/icons-material/Favorite";
function Nav() {
  const { product, search, setSearch, setproduct } = useContext(ProtuctContext);

  const countCart = product.filter((e) => e.cart === true);
  const countfavorite = product.filter((e) => e.favorite === true);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  function logout() {
    localStorage.removeItem("currentUser");
    window.location = "/"; // Redirect to home page

    const prev = product.map((i) => ({ ...i, cart: false, quantiy: 0, favorite: false }));
    setproduct(prev);
    localStorage.setItem("products", JSON.stringify(prev));

  }





  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          <h6 style={{ marginBottom: "-15px" }}>Abdallah</h6>
          <p className="m-0">commerce</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 mb-2 mb-lg-0  grid justify-content-center ">
            <li className="nav-item col-2">
              <Link
                to="/Products"
                className="nav-link active "
                aria-current="page"
                href="#"
              >
                Products
              </Link>
            </li>
            <li className="nav-item col-2">
              <Link to="/Cart" className="nav-link" href="#">
                Cart
                <sup className="bg-warning px-1 text-secondary rounded-5">
                  {countCart.length}
                </sup>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Favorites" className="nav-link" href="#">
                <FavriteIcon color="error" />
                <sup className="bg-warning px-1 text-secondary rounded-5">
                  {countfavorite.length}
                </sup>
              </Link>
            </li>
          </ul>
          <Link to="/Search">
            <form className="d-flex" role="search">
              <input
                value={search}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              
            </form>
          </Link>

          {!currentUser ? (
            <div className="d-flex col-xl-2 col-md-3  mt-xl-0 mt-lg-0 mt-3 gap-2 ">
              <Link to="/Signin" className="btn btn-outline-success ">
                Sign in
              </Link>
              <Link to="/Login" className="btn btn-outline-success ">
                Log in
              </Link>
            </div>
          ) : (
            <div className="d-flex col-1">
              <Link onClick={logout} className="btn btn-outline-success">
                Log out
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
