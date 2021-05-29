import react, { Component, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard  from './components/Dashboard/Dashboard.js';
import Navbar from './components/Navbar/Navbar.js';

function App(props) {
    let [country_selected,setCountrySelected] = useState("")
    const [graphical_view,setGraphicalview] = useState(false)
    let getCountryData = async (value) => {
        setCountrySelected(value)
    }
    const closeGraphical = () => {
        setGraphicalview(false)
    }
    const showGraphical = () => {
        setGraphicalview(true)
    }
    return (
        <Router>
            <div className="App">
                <Navbar showGraphical={showGraphical} graphical_view={graphical_view} getCountryData={getCountryData}></Navbar>
                <Switch>
                    <Route path="/" exact component={ () => <Dashboard closeGraphical={closeGraphical} graphical_view={graphical_view} country_selected={country_selected}></Dashboard>} />
                </Switch>
            </div>
        </Router>
  );
}

export default App;
