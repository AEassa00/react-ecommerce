

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
   
    Promise.all([
      fetch("https://dummyjson.com/products/category/smartphones").then((res) =>
        res.json(),
      ),
      fetch("https://dummyjson.com/products/category/laptops").then((res) =>
        res.json(),
      ),
      fetch("https://dummyjson.com/products/category/tablets").then((res) =>
        res.json(),
      ),
      fetch("https://dummyjson.com/products/category/mobile-accessories").then((res) =>
        res.json(),
      ),
    ])
      .then(([phones, laptops, tablets, accessories]) => {
        const productapi=[...phones.products, ...laptops.products, ...tablets.products, ...accessories.products]
        setproduct(productapi);
        localStorage.setItem("products", JSON.stringify(productapi));
      })
      .catch((err) => console.log(err));
  
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


  //function in cart
  function handleDeleteAll(id) {
      const prev = product.map((i) =>
        i.id === id ? { ...i, cart: false, quantiy: 0 } : i,
      );
  
      setproduct(prev);
      localStorage.setItem("products", JSON.stringify(prev));
  
    }

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
            }
          : i,
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
        handleAdd,
        handleDelete
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
