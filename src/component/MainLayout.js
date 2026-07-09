import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
