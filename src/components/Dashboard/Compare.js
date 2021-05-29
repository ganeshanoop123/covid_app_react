import react from 'react';

export default function Compare(props){
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
            <div>Please Select Country</div>
        </div>    
    )
}