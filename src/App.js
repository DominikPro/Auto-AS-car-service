import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Leyouts/Footer";
import Header from "./Leyouts/Header";
import Navigation from "./Leyouts/Navigation";
import Page from "./Leyouts/Page";
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

        <section>
          <Page />
        </section>

        <footer>
          <Footer />
        </footer>

      </div>
    </Router>
  );
}

export default App;
