import React from "react";
import { BrowserRouter as Router, link, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import HomePage from "./Leyouts/HomePage";
import ContactPage from "./Leyouts/ContactPage"
import ServicesPage from "./Leyouts/ServicesPage.js"
import './css/maine.css'

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <nav>
        <Navigation />
        </nav>
        <header>
          <Header />
        </header>

        <div className="page-wrapper">
        <Route path="/" component={HomePage} exact/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/services" component={ServicesPage}/>
        </div>

        <footer>
          <Footer />
        </footer>

      </div>
    </Router>
  );
}

export default App;
