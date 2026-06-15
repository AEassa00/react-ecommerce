import React, { useContext } from "react";
import ProductContext from "../context/cearteContext";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AlertAddToCart from "../other/Alert";

export default function Favorites() {
  const { product, handleShow, handlefavorite, showAlert, removeAlert } =
    useContext(ProductContext);

  const listfavorite = product.filter((e) => e.favorite === true);

  const lfavorite = listfavorite.map((e) => {
    return (
      <div
        className="border  container row  rounded-3 "
        key={e.id}
        style={{ margin: "10px", height: "10rem" }}
      >
        <Link
          to={`/Products/${e.id}`}
          className="text-decoration-none text-dark row  col-10 align-items-center  "
        >
          <img
            className="col-1"
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
            src={e.image}
            alt={e.title}
          />
          <div className="col ">
            <h2>{e.title}</h2>
            {/* <p className='card-text'>{}</p> */}

            <div className=" ">
              <span className="bg-warning p-1 rounded-3 ">{e.price} $</span>
            </div>
          </div>
        </Link>
        <div className="col-2 row h-100 align-items-center ">
          <Link
            className=" rounded-circle p-0 text-white text-center bg-success col  m-1"
            onClick={() => handleShow(e.id)}
          >
            <i className="bi bi-cart"></i>
          </Link>
          <DeleteForeverIcon
            className="col btn w-25 h-25  m-1 text-danger"
            onClick={() => handlefavorite(e.id)}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container mt-5" style={{ minHeight: "100vh" }}>
        <h1 className="text-center mb-3">Favorite Products</h1>
        {lfavorite.length > 0 ? 
          lfavorite
         : (
          <p className=" text-center vh-100">No favorite products found.</p>
        )}
        {showAlert.cart === true ? 
          <div className=" position-fixed bottom-0 end-0 m-4">
            <AlertAddToCart massage={"add to cart"}/>
          </div>
        : 
          ""
        }
        {removeAlert.favorite === true ? (
          <div className=" position-fixed bottom-0 end-0 m-4">
            <AlertAddToCart massage={"remove from favorite"} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
