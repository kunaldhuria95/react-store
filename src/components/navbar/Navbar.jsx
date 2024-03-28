import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link to="/react-store">
        <img src="./react-store/shop.png" className={styles.shop} />
        
        </Link>
    </div>
  )
}

export default Navbar