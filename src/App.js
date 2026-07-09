

import {  useEffect, useState } from "react";
import ProductContext from "./context/cearteContext";


import AppRoutes from "./routes/AppRoutes";



function App() {
  
  const [showAlert,setShowAlert]=useState({cart:false,favorite:false});
  const [removeAlert,setRemoveAlert]=useState({cart:false,favorite:false});
  const [search,setSearch]= useState("")

console.log(search)

  const [product,setproduct]=useState([])


  useEffect(()=>{
    const saved= localStorage.getItem("products");
    if(saved){
      setproduct(JSON.parse(saved))
    }
    else{
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data =>{ setproduct(data)
  localStorage.setItem("products", JSON.stringify(data))})
}},[])
  
   


  function handleShow(id){
     
    const addstorage=product.map((i)=>i.id===id?{...i,cart:true,quantiy:(i.quantiy||0)+1}:i)
    
    setproduct(addstorage)
    localStorage.setItem("products",JSON.stringify(addstorage))
    
    addstorage.forEach((e) => {
      if (e.id === id) {
        if (e.cart === true) {
          setShowAlert({ showAlert, cart: true });
          setTimeout(() => {
            setShowAlert({ showAlert, cart: false });
          }, 2000);
        } else {
          setRemoveAlert({ removeAlert, cart: true });
          setTimeout(() => {
            setRemoveAlert({ removeAlert, cart: false });
          }, 2000);
        }
      }
    });
  //   setShowAlert({showAlert,cart:true})
  //   setTimeout(() => {
  //   setShowAlert({showAlert,cart:false})
  //  }, 2000);
   }

   function handlefavorite(id){
    
    const addfavorite=product.map((e)=>e.id===id?{...e,favorite:!e.favorite}:e)
    setproduct(addfavorite)
    localStorage.setItem("products",JSON.stringify(addfavorite))

    const infavorite=addfavorite.filter((e)=>e.favorite===true)
    console.log(infavorite);
    
    addfavorite.forEach((e)=>{
      if(e.id===id){
        if(e.favorite===true){
          setShowAlert({showAlert,favorite:true})
          setTimeout(() => {
            setShowAlert({showAlert,favorite:false})
           }, 2000);
        }
        else{
          setRemoveAlert({removeAlert,favorite:true})
          setTimeout(() => {
            setRemoveAlert({removeAlert,favorite:false})
           }, 2000);
        }
      }
    })
    

    
    
    
    
  }
  function handleDeleteAll(id) {
      const prev = product.map((i) =>
        i.id === id ? { ...i, cart: false, quantiy: 0 } : i,
      );
  
      setproduct(prev);
      localStorage.setItem("products", JSON.stringify(prev));
  
    }
  
  

  
  return (
    <ProductContext.Provider
      value={{
        product,
        setproduct,
        showAlert,
        setShowAlert,
        handleShow,
        handlefavorite,
        removeAlert,
        setRemoveAlert,
        search,
        setSearch,
        handleDeleteAll,
      }}
      
    >
      <div
        className="App  d-flex flex-column justify-content-between"
        style={{ minHeight: "" }}
      >
        {/* <Nav  /> */}

        <AppRoutes />
        {/* <Footer/> */}
      </div>
    </ProductContext.Provider>
  );
}

export default App;
