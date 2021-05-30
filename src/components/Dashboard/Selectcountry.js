import React, {useState,useEffect} from 'react';
import 'react-responsive-modal/styles.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Modal } from 'react-responsive-modal';
export default function Selectcountry(props) {
    const [search,setSearch] = useState("")
    const [selected_list,setList] = useState([])
    const [result,setResult] = useState(0)
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [loading, setLoading] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const searchCountry = (e) => {
        setSearch(e.target.value)
        forceUpdate()
        for(let i=0; i < props.country_list.length; i++){
            if(props.country_list[i] === search){
                console.log(i)
                return i
            }
        }
        return -1
    }
    const selectCountries = (e) => {
        if (selected_list.includes(e.target.value)) {
            setList(selected_list.filter(tool => tool !== e.target.value));
            setResult(selected_list.length - 1)
        } else {
            setList([...selected_list, e.target.value]);// or push
            setResult(selected_list.length + 1)
        }
    }
    const resetSearch = () => {
        setSearch("")
        forceUpdate()
        setFilteredCountries(
            props.country_list.filter((country) =>
                country.country.toLowerCase().includes(search.toLowerCase())
            )
        );
    }
    const shareCountry = () => {
        props.saveCountry(selected_list)
        props.closeselectCountry()
    }
    useEffect(() => {
        setFilteredCountries(
            props.country_list.filter((country) =>
                country.country.toLowerCase().includes(search.toLowerCase())
            )
        );
    },[search, props.country_list])
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
                                <span className="search-magnify pointer mt-7px" onClick={resetSearch}>
                                    <i className="fa fa-times-circle fs-20"></i>
                                </span>
                            }    
                            <input className="search-bar" value={search} onInput={searchCountry} type="text" placeholder="Search Country ...." />
                        </div>
                    </div>
                    {filteredCountries.length ? <div className="pointer pl-4 pt-2 fw-500 text-primary">{result <= 1 ? result + ' ' + 'Country Selected' : result + ' ' + 'Countries Selected' }</div> : null }
                    {filteredCountries.length === 0 ?
                        <div className="noResults">
                            No Results Found
                        </div> : 
                        <div className="overflow-country">
                            {filteredCountries && filteredCountries.map((list,index) => (
                                <div key={index} className="d-flex align-items-center country-list fw-500 fs-16">
                                    <FormControl component="fieldset">
                                        <FormControlLabel value={list.country} onChange={selectCountries} control={<Checkbox color="default" size="small" />} label={list.country} className="fs-16" style={{fontSize:'16px',fontWeight:'500',marginTop:'1px'}} labelPlacement="end"/>
                                    </FormControl>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                {filteredCountries.length ?
                    <div className="footer-actions mt-0 pt-3 d-block">
                        { result === 0 ?
                            <div className="text-black mt-2 fw-500">Please Select Country</div> :
                            <button type="button" className="btn btn-success text-white fw-500 btn-smm ml-4 fs-14" onClick={shareCountry}>SAVE</button>
                        }    
                    </div>: null
                }
            </Modal>
        </div>
    );
}