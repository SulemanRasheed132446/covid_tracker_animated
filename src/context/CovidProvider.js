import React, { createContext, useState, useEffect } from 'react'
import { covidApi } from '../util/api'
export const CovidContext = createContext();
export const CovidProvider = ({ children }) => {
    const [selectedCountry, setSelectedCountry] = useState('Pakistan');
    const [countryList, setCountryList] = useState([]);
    const [countryData, setCountryData] = useState({
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        TotalConfirmed: 0,
        TotalDeaths: 0,
        TotalRecovered: 0,
        country: selectedCountry
    })

    useEffect(() => {
        const setData = async () => {
            const data = await covidApi.getCountryData(selectedCountry);
            setCountryData(data);
        }
        setData();
    }, [selectedCountry])

    useEffect(() => {
        const setCountriesList = async () => {
            const countriesList = await covidApi.getAllCountries();
            setCountryList(countriesList);
        }
        setCountriesList();
    }, [])

    const countryHandler = (name) => {
        setSelectedCountry(name);
    }
    return (
        <CovidContext.Provider value={{
            countryData,
            countryList,
            countryHandler
        }}>
            {children}
        </CovidContext.Provider>
    )
}
