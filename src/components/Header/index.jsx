import React from 'react'

import logo from '../../assets/icons/site-logo.png'
import styles from './header.module.css'


function Header() {
    return (
        <header id='header' className={styles.header}>
            <div className="container">
                <nav className={styles['header__nav']}>
                    <a href="#home" >
                        <img className={styles['site-logo']} src={logo} height={35} alt="site logo" />
                    </a>
                    <ul className={styles['header__list']}>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#articles">Articles</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                    <div>
                        <p>Cart <span>0</span></p>
                        <button className={styles['header__btn']}>
                            Get a free quote
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}


export default Header