import React, { useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));
export default function Navbar(){
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return(
        <div className="navbar">
            <h1 className="text-white font-weight-bold">
                COVID-19
            </h1>
            <div>
                <FormControl className={classes.formControl}>
                    <Select value={age} onChange={handleChange} displayEmpty className={classes.selectEmpty} inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value="">
                            <em>World</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}