import React from 'react';
import './Style/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './Leyouts/Footer'



function App() {
  return (
    <Router>
    <div className="App">
    <header>Heder</header>
     <h1>Hello World</h1>

     <footer><Footer/> </footer>
    </div>
    </Router>
  );
}

export default App;
