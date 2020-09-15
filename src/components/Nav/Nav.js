import React, { useState } from 'react'
import styles from './Nav.module.css';
import logo from '../../assets/images/Logo.png'
import Fade from 'react-reveal/Fade'
const options = [
    'Home',
    'Our Results',
    'Exterior',
    'Interior',
    'About Us',
    'Contact Us'
];

export const Nav = () => {
    const [selected, setselected] = useState(options[0]);
    return (
        <Fade top >
            <nav className={styles.navBar}>
                <img src={logo} alt="covidLogo" />
                <ul className={styles.navList}>
                    {options.map((option) => {
                        return (<li
                            key={option}
                            className={selected === option ? styles.selected : ""}
                            onClick={() => setselected(option)}
                        > {option}</li>)
                    })}
                </ul>

            </nav >
        </Fade >
    )
}
