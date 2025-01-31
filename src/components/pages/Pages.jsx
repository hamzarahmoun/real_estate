import React from "react"
import Header from "../common/header/Header"
import { Route, BrowserRouter as Router } from "react-router-dom"
import Footer from "../common/footer/Footer"



function  Pages  () {
  return (
    <>
      <Router>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages