import { Route, Routes } from "react-router-dom";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import Protucts from "./pages/Protucts";
import { useContext, useEffect, useState } from "react";
import ProductContext from "./context/cearteContext";
import {v4 as uuidv4} from 'uuid';
import Productdetails from './pages/Productdetails';
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";



function App() {
  
  const [showAlert,setShowAlert]=useState({cart:false,favorite:false});



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
     
    const addstorage=product.map((i)=>i.id==id?{...i,cart:true,quantiy:(i.quantiy||0)+1}:i)
    
    setproduct(addstorage)
    localStorage.setItem("products",JSON.stringify(addstorage))
    
    
    setShowAlert({showAlert,cart:true})
    setTimeout(() => {
    setShowAlert({showAlert,cart:false})
   }, 2000);
   }

   function handlefavorite(id){
    
    const addfavorite=product.map((e)=>e.id==id?{...e,favorite:!e.favorite}:e)
    setproduct(addfavorite)
    localStorage.setItem("products",JSON.stringify(addfavorite))

    const infavorite=addfavorite.filter((e)=>e.favorite===true)
    console.log(infavorite);
    
    
     setShowAlert({showAlert,favorite:true})

    setTimeout(() => {
    setShowAlert({showAlert,favorite:false})
   }, 2000);
  
    
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
      }}
    >
      <div className="App d-flex flex-column justify-content-between" style={{ minHeight: "" }}>
        <Nav  />

        <Routes>
          <Route path="/" element={<>home</>}>
            {" "}
          </Route>
          <Route path="/Products" element={<Protucts />}>
            {" "}
          </Route>
          <Route path="/Cart" element={<Cart />}>
            {" "}
          </Route>
          <Route path="/Favorites" element={<Favorites />}>
            {" "}
          </Route>
          <Route path="/Products/:id" element={<Productdetails />}>
            {" "}
          </Route>
        </Routes>
        <Footer/>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
