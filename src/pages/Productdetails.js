import React, { useContext, useState } from "react";
import ProductContext from "../context/cearteContext";
import { useParams } from "react-router-dom";
import { Link } from "@mui/material";
import AlertAddToCart from "../other/Alert";
import FavriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";



export default function Productdetails() {
  const [photo, setPhoto] = useState();

  const {
    product,
    handleShow,
    showAlert,
    handlefavorite,
    removeAlert,
    handleDelete,
    handleAdd
  } = useContext(ProductContext);

  console.log(product);
  const { id } = useParams();

  const dataProduct = product.find((e) => e.id === Number(id)) || "";
  console.log(dataProduct);

  return (
    <div className="container h-100 my-5 mx-auto  d-flex justify-content-center row align-items-center">
      <div
        style={{ height: "500px" }}
        className=" justify-content-center gap-4 col-lx col-lg col-md-10 my-5 mx-auto  "
      >
        <div className=" w-100 rounded h-75 light col-5 d-flex justify-content-center align-items-center shadow">
          <img width="80%" src={photo || dataProduct.thumbnail} alt="" />
        </div>
        <div className=" d-flex  justify-content-evenly align-items-start w-100">
          {dataProduct.images?.map((img) => (
            <div
              key={img}
              className=" w-25 h-100 light shadow p-2 rounded m-2"
              onClick={() => setPhoto(img)}
            >
              <img src={img} width="100%" alt="" />
            </div>
          ))}
        </div>
      </div>
      <div
        className="     position-relative col-md-10 col-lg gap-3 "
        style={{ height: "500px" }}
      >
        <h1 className=""> {dataProduct.title}</h1>
        <h6> {dataProduct.price} $</h6>

        <Rating
          name="read-only"
          value={Number(dataProduct.rating)}
          readOnly
          precision={0.5}
        />

        <p>Details: {dataProduct.description}</p>

        <div className="d-flex justify-content-around align-items-center mt-5 w-100  ">
          {dataProduct.cart ? (
            // <Link
            //   className="btn light rounded-5"
            //   onClick={() => handleDeleteAll(dataProduct.id)}
            // >
            //   <i
            //     className="bi bi-cart-check-fill text-success"
            //     style={{ height: "60px ", width: "60px", fontSize: "30px" }}
            //   ></i>
            // </Link>
            <div
              className="light d-flex border border-success justify-content-evenly align-items-center rounded-5 p-1"
              style={{ width: "100px", height: "35px" }}
            >
              {dataProduct.quantiy === 1 ? (
                <button
                  className="btn  p-0"
                  onClick={() => handleDelete(dataProduct.id)}
                >
                  <i className="bi bi-trash-fill text-danger"></i>
                </button>
              ) : (
                <button
                  className="bot rounded-circle text-danger"
                  onClick={() => handleDelete(dataProduct.id)}
                >
                  -
                </button>
              )}
              <span>{dataProduct.quantiy}</span>

              <button
                className="bot rounded-circle  text-success"
                onClick={() => handleAdd(dataProduct.id)}
              >
                +
              </button>
            </div>
          ) : (
            <Link
              className=" btn text-dark light rounded-5"
              onClick={() => handleShow(dataProduct.id)}
            >
              <i
                className="bi bi-cart-check"
                style={{ height: "60px ", width: "60px", fontSize: "30px" }}
              ></i>
            </Link>
          )}
          {dataProduct.favorite ? (
            <FavriteIcon
              style={{
                height: "60px ",
                width: "60px",
                fontSize: "30px",
                border: "none",
                paddingTop: "10px",
              }}
              className={`btn text-danger   `}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handlefavorite(dataProduct.id);
              }}
            />
          ) : (
            <i
              style={{
                height: "60px ",
                width: "60px",
                fontSize: "28px",
                border: "none",
                paddingTop: "12px",
              }}
              className={` bi bi-heart icons btn align-center  `}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handlefavorite(dataProduct.id);
              }}
            ></i>
          )}
        </div>
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
