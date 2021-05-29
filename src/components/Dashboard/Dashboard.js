import react, { useEffect, useState } from 'react';
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";
import Graphicalview from "./Graphicalview.js"
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
    const [graphical_view,setGraphicalview] = useState(false)
    const [color, setColor] = useState("#ffffff");
    const [covid,setCovid] = useState({
        active: 0,
        cases: 0,
        recovered: 0,
        deaths: 0
    })
    const closeGraphical = () => {
        setGraphicalview(false)
    }
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
    const showGraphical = () => {
        setGraphicalview(true)
    }
    useEffect(() => {
        loadCountryData()
    },[])
    return(
        <div className="overflow-content">
            <Video></Video>
            { graphical_view === false ?
                <div className="w-100">
                    <button onClick={showGraphical} className="btn btn-smm btn-outline d-block pull-right mr-5" type="button">
                        Graphical View
                    </button>
                </div> : null
            }    
            {graphical_view === true ?
                <Graphicalview closeGraphical={closeGraphical} covid_cases={covid}></Graphicalview> :
                <div>
                    {loading === false ?
                        <div className="mt-10">
                            <div className="row justify-content-center text-white pt-15 cases">
                                <div className="col">
                                    <h1 className="font-weight-bold">
                                        TOTAL CASES
                                    </h1>
                                    <h1 className="font-weight-bold">
                                        {numberWithCommas(covid.cases)}
                                    </h1>
                                </div>
                                <div className="col">
                                    <h1 className="font-weight-bold">
                                        TOTAL ACTIVE CASES
                                    </h1>
                                    <h1 className="font-weight-bold">
                                        {numberWithCommas(covid.active)}
                                    </h1>
                                </div>
                            </div>    
                            <div className="row justify-content-center text-white pt-30 recovered-cases">
                                <div className="col">
                                    <h1 className="font-weight-bold">
                                        TOTAL RECOVERED CASES
                                    </h1>
                                    <h1 className="font-weight-bold">
                                        {numberWithCommas(covid.recovered)}
                                    </h1>
                                </div>
                                <div className="col">
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