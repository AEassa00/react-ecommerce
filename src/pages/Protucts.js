import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../context/cearteContext';

import AlertAddToCart from "../other/Alert";
import FavriteIcon from '@mui/icons-material/Favorite';


function Protucts() {

  


 const {product,showAlert,handleShow,handlefavorite,removeAlert,handleDelete,handleAdd}=useContext(ProductContext)

 
 
 
 const list = product.map((pro)=>{
    

   
   return (
     <div
       className="card position-relative hover "
       key={pro.id}
       style={{ width: "16rem", margin: "10px", height: "400px" }}
     >
       <Link to={`${pro.id}`} className="card-body container">
         <h5
           className="card-title overflow m-0"
           style={{ height: "30px" }}
         >{`${pro.title}`}</h5>
         <div className="d-flex justify-content-center align-items-center  ">
           <img
             src={pro.thumbnail}
             className="card-img-top "
             alt={pro.title}
           ></img>
         </div>

         <p className="card-text overflow ">{`${pro.description}`}</p>

         <div className="d-flex justify-content-around align-items-center ">
           <span className="bg-warning p-1 rounded-3  ">{pro.price}</span>
         </div>
       </Link>
       <div className="d-flex  justify-content-around position-absolute bottom-0 align-items-center w-100  mb-2">
         {pro.favorite ? (
           <FavriteIcon
             style={{ height: "60px ", width: "60px" }}
             className={`btn ${pro.favorite ? "text-danger" : " text-dark "}   `}
             onClick={(e) => {
               e.stopPropagation();
               e.preventDefault();
               handlefavorite(pro.id);
             }}
           />
         ) : (
           <i
             style={{ height: "60px ", width: "60px", fontSize: "30px" }}
             className={` bi bi-heart icons btn  `}
             onClick={(e) => {
               e.stopPropagation();
               e.preventDefault();
               handlefavorite(pro.id);
             }}
           ></i>
         )}
         {pro.cart ? (
           <div
             className="light  d-flex justify-content-evenly align-items-center rounded-5 p-1"
             style={{ width: "100px", height: "35px" }}
           >
             {pro.quantiy === 1 ? (
               <button
                 className="btn  p-0"
                 onClick={() => handleDelete(pro.id)}
               >
                 <i className="bi bi-trash-fill text-danger"></i>
               </button>
             ) : (
               <button
                 className="bot rounded-circle text-danger"
                 onClick={() => handleDelete(pro.id)}
               >
                 -
               </button>
             )}
             <span>{pro.quantiy}</span>

             <button
               className="bot rounded-circle  text-success"
               onClick={() => handleAdd(pro.id)}
             >
               +
             </button>
           </div>
         ) : (
           <Link
             className=" btn text-dark light rounded-5"
             onClick={() => handleShow(pro.id)}
           >
             <i
               className="bi bi-cart-check"
               style={{ height: "60px ", width: "60px", fontSize: "30px" }}
             ></i>
           </Link>
         )}
       </div>
     </div>
   );});


  return (
    <div className='container ' style={{display:"flex",justifyContent:"center" ,flexWrap:"wrap"}}>
    {list}
    {showAlert.cart===true?
    <div className=' position-fixed bottom-0 end-0 m-4' >
      <AlertAddToCart massage={"add to cart"} />
      </div>:""}
    
    {showAlert.favorite===true?
    <div className=' position-fixed bottom-0 end-0 m-4' >
      <AlertAddToCart massage={"add to favorite"} />
      </div>:""}
    {removeAlert.favorite===true?
    <div className=' position-fixed bottom-0 end-0 m-4' >
      <AlertAddToCart massage={"remove from favorite"} />
      </div>:""}
    
    </div>
  )
}

export default Protucts