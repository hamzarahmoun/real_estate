import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "../common/footer/Footer"



function  Pages  () {
  return (
    <>
      <Router>
        <Header />
        <Footer />
        
      </Router>
    </>
  )
}

export default Pages