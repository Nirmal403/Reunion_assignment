import React from 'react'
import styles from "../css/navbar.module.css"

const Navbar = () => {
  return (
    <div id={styles.nav}>
        <div id={styles.seg1}>
        <img id={styles.icon} src="https://www.brandbucket.com/sites/default/files/logo_uploads/239930/estatery_0.png" />
        <p>Rent</p>
        <p>Buy</p>
        <p>Sell</p>
        <p></p>
        <select id={styles.manageproperty} >
            <option value="">Manage Property</option>
            <option value="Houses">Houses</option>
            <option value="Mortage">Mortage</option>
            <option value="Villa">Villa</option>
        </select>
        <select id={styles.resources}>
            <option value="Resources">Resources </option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
        </select>
        </div>
        <div id={styles.seg2}>
            <button id={styles.login}>Login</button>
            <button id={styles.signup}>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar