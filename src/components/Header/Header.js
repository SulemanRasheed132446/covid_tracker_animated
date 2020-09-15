import React from 'react'
import { Nav } from '../Nav/Nav'
import { Banner } from '../Banner/Banner'
import { StatsBox } from '../StatsBox/StatsBox'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Nav />
            <Banner />
            <StatsBox />
        </div>

    )
}
