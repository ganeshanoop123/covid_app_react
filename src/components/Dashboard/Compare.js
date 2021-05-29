import react, { useState } from 'react';
import Selectcountry from './Selectcountry.js';

export default function Compare(props){
    const [open,setOpen] = useState(false)

    const showSelectCountry = () => {
        setOpen(true)
    }
    const closeSelectCountry = () => {
        setOpen(false)
    }
    return(
        <div className="graphical-view">
            <div className="d-flex align-items-center close-graph justify-content-between">
                <h1 className="text-white font-weight-bold">
                    COVID-19
                </h1>
                <div>
                    <div className="d-block pull-right mr-3" onClick={props.closeComparision}>
                        <i className="fa fa-times-circle text-white fs-26"></i>
                    </div>
                </div>
            </div>
            <h1 className="mt-50 text-white d-block pointer" onClick={showSelectCountry}>Please Click Here To Select Country</h1>
            { open === true ? <Selectcountry style={{zIndex:'9999'}} showSelectCountry={showSelectCountry} closeSelectCountry={closeSelectCountry} open={open}></Selectcountry> : null }
        </div>    
    )
}