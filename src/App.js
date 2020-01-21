import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  );
}

export default App;
