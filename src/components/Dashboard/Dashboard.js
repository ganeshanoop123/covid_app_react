import react, { useEffect, useState } from 'react';
import Video from "./Video.js"
import axios from "axios";
import "./Dashboard.css"

export default function Dashboard(props){   
    const [covid,setCovid] = useState({
        active: 0,
        cases: 0,
        recovered: 0,
        deaths: 0
    })
    const loadCountryData = async () => {
        try {
            const {data} = await axios({
                method: 'get', //you can set what request you want to be
                url: `https://coronavirus-19-api.herokuapp.com/countries/`+props.country_selected,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            console.log(data)
            setCovid({
                active: data.active,
                cases: data.cases,
                recovered: data.recovered,
                deaths: data.deaths
            });
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
        <div>
            <Video></Video>
            <div className="row justify-content-center text-white pt-50 cases">
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
                        {numberWithCommas(covid.cases)}
                    </h1>
                </div>
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
            {/* <button className="btn btn-smm btn-outline mt-30" type="button">
                Get Started
            </button> */}
        </div>    
    )
}