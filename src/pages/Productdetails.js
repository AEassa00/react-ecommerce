import React, { useContext } from "react";
import ProductContext from "../context/cearteContext";
import { useParams } from "react-router-dom";
import { Link } from "@mui/material";
import AlertAddToCart from "../other/Alert";
import FavriteIcon from "@mui/icons-material/Favorite";




export default function Productdetails() {
  const { product, handleShow, showAlert, handlefavorite, removeAlert, handleDeleteAll } =
    useContext(ProductContext);

  console.log(product);
  const { id } = useParams();

  const dataProduct = product.find((e) => e.id === Number(id)) || "";
  console.log(dataProduct);

  return (
    
      <div className="row  h-100 d-flex justify-content-center align-items-center">
        <div style={{ height: "500px" }} className="   m-5">
          <div className="h-100 bg-secondary col-5 d-flex justify-content-center align-items-center">
            <img width="400px" height="90%" src={dataProduct.image} alt="" />
          </div>
        </div>
        <div className="border border-danger border-5 w-50  m-5 p-3 position-relative col-4">
          <h5 className="text-center ">Name: {dataProduct.title}</h5>
          {dataProduct.cart ? (
            <Link
              className="btn "
              onClick={() => handleDeleteAll(dataProduct.id)}
            >
              <i
                className="bi bi-cart-check-fill text-success"
                style={{ height: "60px ", width: "60px", fontSize: "30px" }}
              ></i>
            </Link>
          ) : (
            <Link className=" btn  " onClick={() => handleShow(dataProduct.id)}>
              <i
                className="bi bi-cart-check"
                style={{ height: "60px ", width: "60px", fontSize: "30px" }}
              ></i>
            </Link>
          )}
          {dataProduct.favorite ? (
            <FavriteIcon
              style={{ width: "25px", height: "25px" }}
              className={`btn text-danger  p-0  me-5 end-0 position-absolute end-0`}
              onClick={() => handlefavorite(dataProduct.id)}
            />
          ) : (
            <i
              style={{ width: "25px", height: "25px" }}
              class={`bi bi-heart icons btn text-dark  p-0  me-5  position-absolute end-0 `}
              onClick={() => handlefavorite(dataProduct.id)}
            ></i>
          )}

          <p>Details: {dataProduct.description}</p>

          <h6>Price: {dataProduct.price} $</h6>
        </div>
        {showAlert.cart === true ? (
          <div className=" position-fixed bottom-0 end-0 m-4">
            <AlertAddToCart massage={"add to cart"} />
          </div>
        ) : (
          ""
        )}
        {showAlert.favorite === true ? (
          <div className=" position-fixed bottom-0 end-0 m-4">
            <AlertAddToCart massage={"add to favorite"} />
          </div>
        ) : (
          ""
        )}
        {removeAlert.favorite === true ? (
          <div className=" position-fixed bottom-0 end-0 m-4">
            <AlertAddToCart massage={"remove from favorite"} />
          </div>
        ) : (
          ""
        )}
      </div>
    
  );
}
