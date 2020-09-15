import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './ChartSearchBox.module.css'
import { ChartBox } from '../ChartBox/ChartBox'
import { SearchBox } from '../SearchBox.js/SearchBox'
export const ChartSearchBox = () => {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} className={styles.chartSearchBox} justify="space-between">
                <Grid container item xs={12} sm={6} lg={8} spacing={3}>
                    <ChartBox />
                </Grid>
                <Grid container item xs={12} sm={6} lg={4} spacing={3}>
                    <SearchBox />
                </Grid>

            </Grid>
        </div>
    )
}
