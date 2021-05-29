import react, { Component, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard  from './components/Dashboard/Dashboard.js';
import Navbar from './components/Navbar/Navbar.js';

function App(props) {
    let [country_selected,setCountrySelected] = useState("")
    const [graphical_view,setGraphicalview] = useState(false)
    const [compare,setCompare] = useState(false)
    let getCountryData = async (value) => {
        setCountrySelected(value)
    }
    const closeGraphical = () => {
        setGraphicalview(false)
    }
    const showGraphical = () => {
        setGraphicalview(true)
    }
    const closeComparision = () => {
        setCompare(false)
    }
    const showComparision = () => {
        setCompare(true)
    }
    return (
        <Router>
            <div className="App">
                <Navbar showComparision={showComparision} showGraphical={showGraphical} compare={compare} graphical_view={graphical_view} getCountryData={getCountryData}></Navbar>
                <Switch>
                    <Route path="/" exact component={ () => <Dashboard closeComparision={closeComparision} compare={compare} closeGraphical={closeGraphical} graphical_view={graphical_view} country_selected={country_selected}></Dashboard>} />
                </Switch>
            </div>
        </Router>
  );
}

export default App;
