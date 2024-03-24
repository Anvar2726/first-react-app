import React from 'react'

import service1 from '../../assets/images/services-1.png';
import service2 from '../../assets/images/services-2.png';
import service3 from '../../assets/images/services-3.png';
import service4 from '../../assets/images/services-4.png';
import icon from '../../assets/images/phone.png';


import styles from './services.module.css'

export const Services = () => {
    return (
        <section id='services' className={styles['services']}>
            <div className="container">
                <div className={styles['services__wrap']}>
                    <h3>Our Services</h3>
                    <button>
                        Explore services
                    </button>
                </div>
                <div className={styles['services__cards__row']}> 
                    <div className={styles['services__card']}>
                        <div>
                            <img src={service1} alt="service card" height={220} />
                        </div>
                        <div>
                            <h3 className={styles['services__card__title']}>House cleaning</h3>
                            <p className={styles['services__card__text']}>
                                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
                            </p>
                        </div>
                    </div>

                    <div className={styles['services__card']}>
                        <div>
                            <img src={service2} alt="service card" height={220} />
                        </div>
                        <div>
                            <h3 className={styles['services__card__title']}>Office cleaning</h3>
                            <p className={styles['services__card__text']}>
                                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
                            </p>
                        </div>
                    </div>

                    <div className={styles['services__card']}>
                        <div>
                            <img src={service3} alt="service card" height={220} />
                        </div>
                        <div>
                            <h3 className={styles['services__card__title']}>Office cleaning</h3>
                            <p className={styles['services__card__text']}>
                                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles['services__sanitization']}>
                    <img src={service4} alt="services" width={544} height={830}/>
                    <div className={styles['services__sanitization__right']}>
                        <p className={styles['services__sanitization__text']}>Covid-19 sanitization</p>
                        <h3 className={styles['services__sanitization__title']}>
                            We follow guidelines to keep you safe from the COVID-19 virus
                        </h3>
                        <p className={styles['services__sanitization__desc']}>
                            Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.
                        </p>
                        <div className={styles['contact__box']}>
                            <button>Get a free quote</button>
                            <div>
                                <img src={icon} alt="phone" />
                                <div className={styles['contact__number']}>
                                    Call us now
                                    <a href="tel:(414)567-2109">(414) 567 - 2109</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;