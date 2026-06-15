import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../context/cearteContext'

import AlertAddToCart from "../other/Alert";
import FavriteIcon from '@mui/icons-material/Favorite'

function Protucts() {

  


 const {product,showAlert,handleShow,handlefavorite,removeAlert}=useContext(ProductContext)

 
 
 
 const list = product.map((pro)=>{
    

   
   return (
     <div
       className="card position-relative "
       key={pro.id}
       style={{ width: "16rem", margin: "10px", height: "400px" }}
     >
       <div className="card-body container">
         <h5
           className="card-title m-0"
           style={{ height: "30px" }}
         >{`${pro.title.slice(0, 15)}....`}</h5>
         <div className="d-flex justify-content-center align-items-center h-50 ">
           <img
             src={pro.image}
             className="card-img-top w-50 "
             alt={pro.title}
           ></img>
         </div>

         <p className="card-text  ">{`${pro.description.slice(0, 40)}....`}</p>

         <div className="d-flex justify-content-around align-items-center ">
           <span className="bg-warning p-1 rounded-3  ">{pro.price}</span>
           {pro.favorite ? (
             <FavriteIcon
               className={`btn ${pro.favorite ? "text-danger" : " text-dark "} hover w-25 h-25  `}
               onClick={() => handlefavorite(pro.id)}
             />
           ) : (
             <i
               class={`bi bi-heart icons btn w-25 h-25  `}
               onClick={() => handlefavorite(pro.id)}
             ></i>
           )}
         </div>
         <div className="d-flex justify-content-around position-absolute bottom-0   mb-2">
           <Link to={`${pro.id}`} className="btn btn-primary m-1 ">
             details
           </Link>
           <Link
             className="btn btn-primary m-1 "
             onClick={() => handleShow(pro.id)}
           >
             add to card
           </Link>
         </div>
       </div>
     </div>
   );});


  return (
    <div className='container' style={{display:"flex",justifyContent:"center" ,flexWrap:"wrap"}}>
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