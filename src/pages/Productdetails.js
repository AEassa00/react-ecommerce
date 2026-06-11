import React, { useContext } from 'react'
import ProductContext from '../context/cearteContext'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'




export default function Productdetails() {
const {product,setShowAlert,setproduct }=useContext(ProductContext)

    console.log(product)
      const {id}=useParams()
      
    const dataProduct=product.find((e)=>e.id===id ) ||""
    console.log(dataProduct);


    function handleShow(){
     

    
    setproduct(prev=> prev.map(i=>i.id===dataProduct.id?{...i,cart:true,quantiy:++i.quantiy}:i))


    
  
   
    
    setShowAlert(true)
    setTimeout(() => {
    setShowAlert(false)
   }, 2000);
   }
   
    
  return (
    <>
    <div className='d-flex justify-content-center justify-content-evenly h-100'>
        <div style={{height:"500px"}} className=' border border-5  w-50  m-5'>
          <img ></img>the photttos
        </div>
        <div className='border border-danger border-5 w-50  m-5 p-3 position-relative' >
          <h1 className='text-center ' >Name: {dataProduct.name}</h1>

          <h4 >Details: {dataProduct.details}</h4>

          <h6>Price: {dataProduct.price} $</h6>
          <Button className='position-absolute bottom-0 mb-3  ' variant='contained' onClick={()=>handleShow(dataProduct.id)}>add to card</Button>
        </div>
       
    </div>
     </>
  )
}

