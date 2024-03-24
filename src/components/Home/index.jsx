import React from 'react';

import styles from './home.module.css'
import phoneImg from '../../assets/images/phone.png'

export function Home() {
    return (
        <section className={styles.home} id='home'>
            <div className="container">
                <h1 className={styles['home__title']}>
                    Quality cleaning for your home
                </h1>
                <p className={styles['home__text']}>
                    Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.
                </p>
                <div className={styles['home__inner__wrapper']}>
                    <button className={styles['home__btn']}>
                        Get a free quote
                    </button>
                    <div className={styles['home__contact']}>
                        <img src={phoneImg} alt="phone" />
                        <div>
                            <p>Call us now</p>
                            <a href="tel:4145672109">(414) 567 - 2109</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;