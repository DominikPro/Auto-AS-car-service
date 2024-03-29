import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import HomePage from "./Leyouts/HomePage";
import ContactPage from "./Leyouts/ContactPage";
import ServicesPage from "./Leyouts/ServicesPage.js";
import "./css/maine.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper  	">
        <Navigation />

        {/* <header>
          <Header />
        </header> */}

        <Route path="/" component={HomePage} exact />
        <Route path="/contact" component={ContactPage} />
        <Route path="/services" component={ServicesPage} />
        {/* <div className="page-wrapper"> */}
        {/* </div> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
