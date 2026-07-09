import React from "react";
import { Route, Routes } from "react-router-dom";
import Protucts from "../pages/Protucts";
import Productdetails from "../pages/Productdetails";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";
import Signin from "../pages/Signin";
import MainLayout from "../component/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/Signin" element={<Signin />}>
        {" "}
      </Route>
      <Route path="/Login" element={<Login />}>
        {" "}
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />}>
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
        <Route path="/Search" element={<Search />}>
          {" "}
        </Route>
      </Route>
    </Routes>
  );
}
