import React, { useContext } from 'react'
import styles from './ChartBox.module.css'
import { Bar } from 'react-chartjs-2'
import { CovidContext } from '../../context/CovidProvider'
export const ChartBox = () => {
    const { countryData: {

        TotalConfirmed,
        TotalDeaths,
        TotalRecovered,
        country
    } } = useContext(CovidContext);
    const Chart = <Bar
        data={{
            labels: ['Infected', 'Recovered', "Deaths"],
            datasets: [{
                label: 'People',
                backgroundColor: [
                    'rgba(255, 62, 41, 0.8)',
                    'rgba(0, 219, 117, 0.74)',
                    'rgba(61, 63, 82, 0.68)',
                ],
                data: [TotalConfirmed, TotalRecovered, TotalDeaths, 0]
            }],
        }}
        options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` }
        }}
    />;
    return (
        <div className={styles.chartBox}>
            <h1>COVID 19 GRAPHS</h1>
            {Chart}
        </div>
    )
}
