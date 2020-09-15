import React, { useContext, useState } from 'react'
import { Card } from '@material-ui/core'
import { CovidContext } from '../../context/CovidProvider'
import styles from './SearchBox.module.css'
import { Country } from '../Country/Country'
export const SearchBox = () => {
    const { countryList } = useContext(CovidContext);
    const [searchTerm, setSearchTerm] = useState('');

    const searchHandler = (e) => {
        setSearchTerm(e.target.value);
    }
    const listToShow = countryList.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (

        <Card className={styles.countryBox}>
            <input type="text" value={searchTerm} onChange={searchHandler} />
            <div className={styles.countryList}>
                {listToShow.map((country) => <Country name={country.name} flagName={country.flagCode} />)
                }
            </div>
        </Card >
    )
}
