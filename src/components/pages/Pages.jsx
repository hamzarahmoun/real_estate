import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "../common/footer/Footer"
import Home from "../home/Home"

function Pages() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages