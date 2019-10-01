import React from "react";
import "./Style/app.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Leyouts/Footer";
import Header from "./Leyouts/Header";
import Navigation from "./Leyouts/Navigation";
import Page from "./Leyouts/Page";

function App() {
  return (
    <Router>
      <div className="App">
        <navigation>
          <Navigation />
        </navigation>
        <header>
          <Header />
        </header>
        <section>
          <Page />
        </section>

        <footer>
          <Footer />{" "}
        </footer>
      </div>
    </Router>
  );
}

export default App;
