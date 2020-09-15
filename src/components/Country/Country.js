import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import styles from './Country.module.css'
import { CovidContext } from '../../context/CovidProvider'
export const Country = ({ name, flagName }) => {
    const { countryHandler } = useContext(CovidContext)

    return (
        <div className={styles.country} onClick={() => countryHandler(name)}>
            <Grid container spacing={2} justify="flex-start" alignItems="center" >
                <img src={`https://www.countryflags.io/${flagName}/flat/64.png`} alt={`${name} flag`} />
                <h4 >
                    {name}
                </h4>
            </Grid>
        </div>
    )
}
