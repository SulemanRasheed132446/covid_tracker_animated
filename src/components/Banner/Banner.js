import React from 'react'
import { Grid } from '@material-ui/core'
import illustration from '../../assets/images/covid_illustration.svg'
import styles from './Banner.module.css'
import Fade from 'react-reveal/Fade'
export const Banner = () => {
    return (
        <div className={styles.banner}>
            <Grid container spacing={1}>
                <Grid container item xs={6} spacing={3}>
                    <Fade left clear>
                        <div className={styles.info}>
                            <h2> COVID-19 Live Tracke</h2>
                            <p>
                                The Coronavirus (COVID-19) was first reported in Wuhan,
                                Hubei, China in December 2019, the outbreak was later recognized
                                as a pandemic by the World Health Organization (WHO) on 11 March 2020.
                        </p>
                        </div>
                    </Fade>
                </Grid>
                <Grid container item xs={6} spacing={3}>
                    <Fade right clear>
                        <div className={styles.imageContainer}>
                            <img src={illustration} alt="illustration"/>
                        </div>
                    </Fade>

                </Grid>
            </Grid>
        </div>
    )
}
