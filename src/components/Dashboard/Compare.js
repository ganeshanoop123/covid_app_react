import react, { useState } from 'react';
import Selectcountry from './Selectcountry.js';

export default function Compare(props){
    const [open,setOpen] = useState(false)
    const [country,setCountry] = useState([])

    const showselectcountry = () => {
        setOpen(true)
    }
    const closeselectCountry = () => {
        setOpen(false)
    }
    const saveCountry = (value) => {
        setCountry(value)
    }
    return(
        <div className="graphical-view">
            <div className="d-flex align-items-center close-graph justify-content-between">
                <h1 className="text-white font-weight-bold">
                    COVID-19
                </h1>
                <div>
                    {open === false ?
                        <div className="d-block pull-right mr-3" onClick={props.closeComparision}>
                            <i className="fa fa-times-circle text-white fs-26"></i>
                        </div>
                        : null
                    }    
                </div>
            </div>
            {country.length ? <button onClick={showselectcountry} className="btn btn-smm btn-outline d-flex align-items-center contentCenter mt-3 justify-content-end mr-3" type="button">
                <span>Update Country</span>
            </button> : null }
            {country.length === 0 && open === false ?
                <h1 className="mt-50 text-white d-block pointer" onClick={showselectcountry}>Please Click Here To Select Country</h1>:
                open === true ? null : <h1 className="mt-50 text-white d-block">PIE CHART</h1>
            }    
            { open === true ? <Selectcountry update_country={country} saveCountry={saveCountry} style={{zIndex:'9999'}} country_list={props.country_list} showselectcountry={showselectcountry} closeselectCountry={closeselectCountry} open={open}></Selectcountry> : null }
        </div>    
    )
}