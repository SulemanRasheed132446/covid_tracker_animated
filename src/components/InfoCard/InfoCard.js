import React from 'react'
import { Grid, Card } from '@material-ui/core'
import styles from './InfoCard.module.css'

export const InfoCard = React.forwardRef(({ logo, heading, detail, animation }, ref) => {

    return (
        <Grid container item xs={12} md={6} lg={4} spacing={3} ref={ref}>
            <Card className={styles.card} >
                <img src={logo} />
                <h2>{heading}</h2>
                <p>{detail}</p>
                <p></p>
            </Card>
        </Grid>
    )
})
