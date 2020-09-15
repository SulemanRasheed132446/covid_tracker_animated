import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/images/Logo.png'
import sociallogo from '../../assets/images/social.png'
import { Grid } from '@material-ui/core'
export const Footer = () => {
    return (
        <footer >
            <div className={styles.footer}>
                <Grid container spacing={1} justify="space-between" alignContent="space-around" alignItems="center">
                    <Grid container item xs={12} sm={12} lg={3} spacing={2}  >
                        <img src={logo} alt="covid ;ogo" />
                        <p >DesignMamba an online marketplace built to cope with promising future</p>
                    </Grid>
                    <Grid container item xs={12} sm={12} lg={3} spacing={2} direction="column" alignContent="flex-start" alignItems="center">
                        <h1>Useful links</h1>
                        <ul >
                            <li>Why</li>
                            <li>About</li>
                            <li>Carers</li>
                            <li>Blog</li>
                            <li>Contract</li>
                        </ul>
                    </Grid>
                    <Grid container item xs={12} sm={12} lg={3} direction="column" justify="center" className={styles.contacts} alignItems="center">
                        <h1>Contact us</h1>
                        <p>Tel: +8801765---561</p>
                        <p>support@designmamba.com</p>
                        <h1>Location</h1>
                        <p>Lalmatia, Dhaka-1207</p>
                    </Grid>
                    <Grid container item xs={12} sm={12} lg={3} spacing={2} direction="column" justify="center" alignItems="center">
                        <h1>Keep in touch</h1>
                        <img src={sociallogo} alt="social media" />
                    </Grid>
                </Grid>
                <h2>© designmamba, All Rights Reserved</h2>
            </div>

        </footer>
    )
}
