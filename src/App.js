import react, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard  from './components/Dashboard/Dashboard.js';
import Navbar from './components/Navbar/Navbar.js';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                </Switch>
            </div>
        </Router>
  );
}

export default App;
