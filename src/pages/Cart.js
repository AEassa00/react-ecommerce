// import '../css/style.css'
import React, { useContext } from "react";
import ProductContext from "../context/cearteContext";

export default function Cart() {
  const { product, setproduct } = useContext(ProductContext);

  console.log(product);

  function handleDeleteAll(id) {
    const prev = product.map((i) =>
      i.id === id ? { ...i, cart: false, quantiy: 0 } : i,
    );

    setproduct(prev);
    localStorage.setItem("products", JSON.stringify(prev));
  }
  const list = product.map((e) => (e.cart === true ? e.price * e.quantiy : 0));
  console.log(list);

  const total = list.reduce((acc, item) => acc + item, 0);

  function handleDelete(id) {
    const prev = product.map((i) =>
      i.id === id
        ? {
            ...i,
            quantiy: i.quantiy > 0 ? i.quantiy - 1 : 0,
            cart: i.quantiy === 1 ? false : true,
          }
        : i,
    );
    setproduct(prev);
    localStorage.setItem("products", JSON.stringify(prev));
  }
  function handleAdd(id) {
    const prev = product.map((i) =>
      i.id === id
        ? {
            ...i,
            quantiy: i.quantiy + 1,
            // cart: i.quantiy === 1 ? false : true,
          }
        : i,
    );
    setproduct(prev);
    localStorage.setItem("products", JSON.stringify(prev));
  }

  const table = product.filter((e) =>
    e.cart ===true).map((e ,index) =>
  
    (
      <tr key={e.id} className="align-middle">
        <td>{index + 1}</td>
        <td >{e.title}</td>

        <td >{e.price} $</td>
        <td>
          <button
            className="btn btn-danger px-2 py-0 mx-1 my-2"
            onClick={() => handleDelete(e.id)}
          >
            -
          </button>
          <span className="p-2">{e.quantiy}</span>
          <button
            className="btn btn-success px-2 py-0 mx-1 my-2"
            onClick={() => handleAdd(e.id)}
          >
            +
          </button>
        </td>
        <td>{(e.price * e.quantiy).toFixed(2)} $</td>
        <td>
          <button
            className="btn btn-secondary px-2 py-0 mx-1 my-2"
            onClick={() => handleDeleteAll(e.id)}
          >
            <i className="bi bi-trash-fill text-danger"></i>
          </button>
        </td>
      </tr>
    ) );  
  
  const countCart = product.filter((e) => e.cart === true).length;
  console.log(countCart);
  
if (countCart  > 0) {
  return (
   
    <div
      className=" container mt-5 position-relative "
      style={{ minHeight: "80vh" }}
    >
      <h1 className="d-flex justify-content-center">Cart</h1>
      <table className="col-12 container text-center table table-bordered mb-5">
        <thead>
          <tr>
            <th>M</th>
            <th className="col-5">name</th>

            <th>price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th className="col-2">Delete</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>

      <div className="position-absolute bottom-0 end-0   ">
        <h1 className="m-0">Total price : {total.toFixed(2)} $</h1>
      </div>
    </div>
  )
} else {
    return (
      <div
        className=" container mt-5 position-relative "
        style={{ minHeight: "80vh" }}
      >
        <h1 className="d-flex justify-content-center">Cart</h1>
        <p className="text-center">Your cart is empty.</p>
      </div>
    );
    }
}
