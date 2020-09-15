import React, { useContext } from 'react'
import styles from './StatsBox.module.css'
import { StatInfo } from '../StatInfo/StatInfo'
import countryImage from '../../assets/images/country.svg';
import deathImage from '../../assets/images/death.svg';
import recoveredImage from '../../assets/images/recovered.svg';
import infectedImage from '../../assets/images/infected.svg';
import { Grid } from '@material-ui/core'
import { CovidContext } from '../../context/CovidProvider'

export const StatsBox = () => {
    const { countryData: {
        NewConfirmed,
        NewDeaths,
        NewRecovered,
        TotalConfirmed,
        TotalDeaths,
        TotalRecovered,
        country
    } } = useContext(CovidContext);
    return (
        <>
            <Grid container spacing={1} justify="space-evenly" alignContent="center" className={styles.statBox}>
                <Grid container item xs={6} md={3} spacing={3}>
                    <StatInfo
                        image={countryImage}
                        title={"Stats Overview"}
                        country={country}
                    />
                </Grid>
                <Grid container item xs={6} md={3} spacing={3}>
                    <StatInfo
                        image={deathImage}
                        title={"Total Coronavirus Cases"}
                        totalCases={TotalConfirmed - NewConfirmed}
                        newCases={NewConfirmed}
                    />
                </Grid>
                <Grid container item xs={6} md={3} spacing={3}>
                    <StatInfo
                        image={recoveredImage}
                        title={"Total Recovered"}
                        totalCases={TotalRecovered - NewRecovered}
                        newCases={NewRecovered}
                    />
                </Grid>
                <Grid container item xs={6} md={3} spacing={3}>
                    <StatInfo
                        image={infectedImage}
                        title={"Total Deaths"}
                        totalCases={TotalDeaths - NewDeaths}
                        newCases={NewDeaths}
                    />
                </Grid>
            </Grid>
        </>
    )
}
