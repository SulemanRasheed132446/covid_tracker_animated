import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './PreventionCard.module.css'


export const PreventionCard = ({ logo, heading, detail }) => {

    return (
        <Grid container item xs={12} sm={6} lg={3} spacing={8} >
            <div className={styles.preventionCard} >
                <img src={logo} alt={heading} />
                <h2>{heading}</h2>
                <p>{detail}</p>
                <p></p>
            </div>
        </Grid>
    )
}