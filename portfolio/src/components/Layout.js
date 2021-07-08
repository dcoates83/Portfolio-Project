import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}></Navbar>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}></Sidebar>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
