import React from 'react'
import styles from './StatInfo.module.css';
import CountUp from 'react-countup'
export const StatInfo = ({ image, title, totalCases, newCases, country }) => {
    return (
        <div className={styles.statInfo}>
            <img src={image} alt="stat_image"/>
            <div>
                <h4>{title}</h4>
                <h3>{country ? country : <CountUp
                    start={0} end={totalCases}
                    duration={2.5} />}
                </h3>
                <h4>{country ? null : '+'}{country ? null : <CountUp
                    start={0} end={newCases}
                    duration={2.5} />}
                </h4>
            </div>
        </div>
    )
}
