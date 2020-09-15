import React from 'react'
import styles from './Info.module.css'
import { spreadList, symptomsList, preventionList } from '../../util/data'
import { InfoCardList } from '../InfoCardList/InfoCardList'
import { PreventionCardList } from "../PreventionCardList/PreventionCardList";
export const Info = () => {
    return (
        <div className={styles.container}>
            <h1>How coronavirus spread</h1>
            <InfoCardList infos={spreadList} />
            <h1>Symptoms of Coronavirus</h1>
            <InfoCardList infos={symptomsList} />
            <h1>Prevention of Covid-19</h1>
            <PreventionCardList infos={preventionList} />

        </div>
    )
}
