import React, { useEffect } from 'react'
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
            props.loadCountries(data)
            return data;
        } catch (e) {
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
            <h1 className="text-white font-weight-bold mb-1">
                COVID-19
            </h1>
            <div className="d-flex align-items-center">
                { props.graphical_view === false && props.compare === false ?
                    <div className="w-100 d-flex align-items-center">
                        { mobile === false ?
                            <button onClick={props.showComparision} className="btn btn-smm btn-outline d-flex align-items-center mr-3" type="button">
                                <i className="fa fa-exchange text-white pt-2 mr-1"></i><span>Compare</span>
                            </button>
                            :
                            <button onClick={props.showComparision} className="btn btn-smm btn-outline d-flex align-items-center" style={{width:'10px',minWidth:'50px',paddingRight:'0px'}} type="button">
                                <i className="fa fa-exchange text-white pt-2 mr-1"></i>
                            </button>
                        }    
                        { mobile === false ?
                            <button onClick={props.showGraphical} className="btn btn-smm btn-outline d-flex align-items-center mr-3" type="button">
                                <i className="fa fa-bar-chart text-white pt-2 mr-1"></i><span>Graphical View</span>
                            </button>
                            : 
                            <button onClick={props.showGraphical} className="btn btn-smm btn-outline d-flex align-items-center" style={{width:'10px',minWidth:'50px',paddingRight:'0px'}} type="button">
                                <i className="fa fa-bar-chart text-white pt-2 mr-1 ml-2"></i>
                            </button>
                        }       
                    </div> 
                    : null
                }    
                { props.graphical_view === false && props.compare === false ?
                    <FormControl className={classes.formControl} style={{position:'relative',bottom:'2px'}}>
                        <Select name="country" value={selected_country} onChange={handleChange} displayEmpty className={classes.selectEmpty} inputProps={{ 'aria-label': 'Without label' }}>
                            {countries && countries.map((country,index) => (
                                <MenuItem key={index} value={country.country}>
                                    {country.country}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>: null
                }
            </div>
        </div>
    )
}