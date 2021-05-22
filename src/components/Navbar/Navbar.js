import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export default function Navbar(){
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }
    return(
        <div className="navbar">
            <h1 className="text-white font-weight-bold">
                COVID-19
            </h1>
            <div>
                <Select options={options} value={value} onChange={changeHandler} />
            </div>
        </div>
    )
}