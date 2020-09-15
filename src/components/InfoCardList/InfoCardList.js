import React from 'react'
import { Grid } from '@material-ui/core'
import { InfoCard } from '../InfoCard/InfoCard'
import Fade from 'react-reveal/Fade';

export const InfoCardList = ({ infos }) => {

    return (
        <Fade top clear>
            <Grid container spacing={1} justify="space-between" alignContent="center" alignItems="center">
                {infos.map((info, i) => {
                    return (
                        <InfoCard key={info.heading}
                            logo={info.logo}
                            heading={info.heading}
                            detail={info.detail}
                        />
                    );
                })}
            </Grid>
        </Fade>
    )
}

