import React from 'react'
import { Grid } from '@material-ui/core'
import { PreventionCard } from '../PreventionCard/PreventionCard'
import Fade from 'react-reveal/Fade';

export const PreventionCardList = ({ infos }) => {
    return (
        <Fade bottom clear>
            <Grid container spacing={1} justify="space-between" alignContent="space-around" alignItems="center">
                {infos.map((info) => {
                    return (
                        <PreventionCard
                            key={info.heading}
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
