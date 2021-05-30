import React, {useState,useEffect} from 'react';
import 'react-responsive-modal/styles.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Modal } from 'react-responsive-modal';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: 3,
        width: 18,
        height: 18,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 18,
            height: 18,
            backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" + " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " + "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
}));
export default function Selectcountry(props) {
    const classes = useStyles();
    const [search,setSearch] = useState("")
    const [selected_list,setList] = useState([])
    const [result,setResult] = useState(0)
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const searchCountry = (e) => {
        setSearch(e.target.value)
        forceUpdate()
    }
    const selectCountries = (e) => {
        if (selected_list.includes(e.target.value)) {
            setList(selected_list.filter(tool => tool != e.target.value));
            setResult(selected_list.length - 1)
        } else {
            setList([...selected_list, e.target.value]);// or push
            setResult(selected_list.length + 1)
        }
    }
    const resetSearch = () => {
        setSearch("")
        forceUpdate()
    }
    useEffect(() => {
    },[])
    return (
        <div>
            <Modal open={props.open} classNames={{animationIn: 'customEnterAnimation',animationOut: 'customLeaveAnimation'}}animationDuration={500} center>
                <div className="modal-title">
                    <div>
                        <h5>SELECT COUNTRY</h5>
                        <span className="mt-2" onClick={props.closeselectCountry}>
                            <i className="fa fa-times-circle pointer text-white fs-20"></i>
                        </span>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="search-heading">
                        <div className="ml-3 mr-3 pb-1 mb-4 form-group">
                            { search === '' ?
                                <span className="search-magnify">
                                    <i className="fa fa-search"></i>
                                </span> :
                                <span className="search-magnify pointer mt-2" onClick={resetSearch}>
                                    <i className="fa fa-times-circle fs-20"></i>
                                </span>
                            }    
                            <input className="search-bar" value={search} onChange={searchCountry} type="text" placeholder="Search Country ...." />
                        </div>
                    </div>
                    <div className="pointer pl-4 pt-2 fw-500 text-primary">{result == 1 ? '1 Country Selected' : result + ' ' + 'Countries Selected' }</div>
                    <div style={{maxHeight:'348px',overflow:'auto'}}>
                        {props.country_list && props.country_list.map((list,index) => (
                            <div key={index} className="d-flex align-items-center country-list fw-500 fs-16">
                                <FormControl component="fieldset">
                                    <FormControlLabel value={list.country} onChange={selectCountries} control={<Checkbox color="default" size="small" />} label={list.country} className="fs-16" style={{fontSize:'16px',fontWeight:'500',marginTop:'1px'}} labelPlacement="end"/>
                                </FormControl>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
}