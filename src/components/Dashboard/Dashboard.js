import react, { useEffect, useState } from 'react';
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";
import Graphicalview from "./Graphicalview.js"
import Compare from "./Compare.js"
import Video from "./Video.js"
import axios from "axios";
import "./Dashboard.css"
const override = css`
    display: block;
    margin: 0 auto;
    width: 300px !important;
    margin-top: 15rem !important;
    border-color: white;
`;
export default function Dashboard(props){   
    const [loading,setLoading] = useState(true)
    const [color, setColor] = useState("#ffffff");
    const [covid,setCovid] = useState({
        active: 0,
        cases: 0,
        recovered: 0,
        deaths: 0
    })
    const loadCountryData = async () => {
        try {
            setLoading(true)
            const {data} = await axios({
                method: 'get', //you can set what request you want to be
                url: `https://coronavirus-19-api.herokuapp.com/countries/`+props.country_selected,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setCovid({
                active: data.active,
                cases: data.cases,
                recovered: data.recovered,
                deaths: data.deaths
            });
            setTimeout(() => {
                setLoading(false)
            }, 1000);
            return data;
        } catch (e) {
        }    
    }
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    useEffect(() => {
        loadCountryData()
    },[])
    return(
        <div className="overflow-content">
            <Video></Video>
            
            {props.graphical_view === true ?
                <Graphicalview closeGraphical={props.closeGraphical} covid_cases={covid}></Graphicalview> : 
                props.compare === true ? <Compare country_list={props.country_list} closeComparision={props.closeComparision}></Compare> : 
                <div>
                    {loading === false ?
                        <div className="mt-10 cases-top container">
                            <div className="row justify-content-center text-white pt-15 cases">
                                <div className="col cases-card">
                                    <h1 className="font-weight-bold">
                                        TOTAL CASES
                                    </h1>
                                    <h1 className="font-weight-bold">
                                        {numberWithCommas(covid.cases)}
                                    </h1>
                                </div>
                                <div className="col cases-card ml-10">
                                    <h1 className="font-weight-bold">
                                        TOTAL ACTIVE CASES
                                    </h1>
                                    <h1 className="font-weight-bold">
                                        {numberWithCommas(covid.active)}
                                    </h1>
                                </div>
                            </div>    
                            <div className="row justify-content-center text-white pt-15 recovered-cases">
                                <div className="col cases-card">
                                    <h1 className="font-weight-bold">
                                        TOTAL RECOVERED CASES
                                    </h1>
                                    <h1 className="font-weight-bold">
                                        {numberWithCommas(covid.recovered)}
                                    </h1>
                                </div>
                                <div className="col cases-card ml-10">
                                    <h1 className="font-weight-bold">
                                        TOTAL DEATHS
                                    </h1>
                                    <h1 className="font-weight-bold">
                                        {numberWithCommas(covid.deaths)}
                                    </h1>
                                </div>
                            </div> 
                        </div>  
                        : <BarLoader color={color} loading={loading} className="mt-30 d-block" css={override} size={150} />  
                    } 
                </div>
            }    
        </div>    
    )
}