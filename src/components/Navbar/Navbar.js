import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from "axios";
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));
export default function Navbar(props){
    const classes = useStyles();
    const [selected_country, setSelectedCountry] = React.useState("");
    const [countries, setCountry] = React.useState("");
    const [mobile, setMobile] = React.useState(false);

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
        props.getCountryData(event.target.value);
    };
    const loadCovidData = async () => {
        try {
            const {data} = await axios({
                method: 'get', //you can set what request you want to be
                url: `https://coronavirus-19-api.herokuapp.com/countries`,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setCountry(data)
            setSelectedCountry("World");
            props.getCountryData("World");
            return data;
        } catch (e) {
            let msg = ""
            // if(e.response.data.hasOwnProperty('errors')){
            //     msg = e.response.data.errors[0].msg
            // }
            // else{
            //     msg = e.response.data.message
            // }
            return console.log('Error')
        }
    }
    useEffect(() => {
        loadCovidData()
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            setMobile(true)
        }
    },[])
    return(
        <div className="navbar pt-0">
            <h1 className="text-white font-weight-bold mt-2">
                COVID-19
            </h1>
            <div className="d-flex align-items-center">
                { props.graphical_view === false ?
                    <div className="w-100">
                        { mobile === false ?
                            <button onClick={props.showGraphical} className="btn btn-smm btn-outline d-flex align-items-center mr-3" type="button">
                                <i className="fa fa-bar-chart text-white pt-2 mr-1"></i><span>Graphical View</span>
                            </button>
                            : 
                            <button onClick={props.showGraphical} className="btn btn-smm btn-outline d-flex align-items-center" style={{width:'10px',minWidth:'50px',paddingRight:'0px'}} type="button">
                                <i className="fa fa-bar-chart text-white pt-2 mr-1"></i>
                            </button>
                        }       
                    </div> : null
                }    
                <FormControl className={classes.formControl} style={{position:'relative',top:'0px'}}>
                    <Select name="country" value={selected_country} onChange={handleChange} displayEmpty className={classes.selectEmpty} inputProps={{ 'aria-label': 'Without label' }}>
                        {countries && countries.map((country,index) => (
                            <MenuItem key={index} value={country.country}>
                                {country.country}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}