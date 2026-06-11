import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-router-dom'
import ProtuctContext from '../context/cearteContext'
import FavriteIcon from '@mui/icons-material/Favorite'
function Nav() {
const {product}=useContext(ProtuctContext)

const countCart=product.filter((e)=>e.cart===true)
const countfavorite=product.filter((e)=>e.favorite===true)



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
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav
