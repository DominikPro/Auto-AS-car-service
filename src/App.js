import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Navigation from "./Components/Navigation";
import HomePage from "./Leyouts/HomePage";
import ContactPage from "./Leyouts/ContactPage";
import ServicesPage from "./Leyouts/ServicesPage.js";
import "./css/maine.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <HashRouter>
          <Navigation />
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/services" exact component={ServicesPage} />
        </HashRouter>
      </div>
    </Router>
  );
}

export default App;
