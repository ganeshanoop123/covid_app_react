import react, { Component, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard  from './components/Dashboard/Dashboard.js';
import Navbar from './components/Navbar/Navbar.js';

function App(props) {
    let [country_selected,setCountrySelected] = useState("")
    let getCountryData = async (value) => {
        setCountrySelected(value)
    }
    return (
        <Router>
            <div className="App">
                <Navbar getCountryData={getCountryData}></Navbar>
                <Switch>
                    <Route path="/" exact component={ () => <Dashboard country_selected={country_selected}></Dashboard>} />
                </Switch>
            </div>
        </Router>
  );
}

export default App;
