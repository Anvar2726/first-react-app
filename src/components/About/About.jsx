import React from 'react'

import about1 from '../../assets/images/about-info1.png';
import about2 from '../../assets/images/about-info2.png';
import about3 from '../../assets/images/about-info3.png';

import styles from './about.module.css'


export const About = () => {
    return (
        <section id='about' className={styles.about}>
            <div className={`container ${styles['about__container']}`}>
                <h3 className={styles['about__title']}>About Us</h3>
                <p className={styles['about__text']}>
                    Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.
                </p>
                <div className={styles['about__cards__row']}>
                    <div className={styles['about__card']}>
                        <div>
                            <img className={styles['about__card__img']} width={240} height={240} src={about1} alt="about card img" />
                        </div>
                        <h3 className={styles['about__card__title']}>
                            1. Schedule online
                        </h3>
                        <p className={styles['about__card__text']}>
                            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.
                        </p>
                    </div>

                    <div className={styles['about__card']}>
                        <div>
                            <img className={styles['about__card__img']} width={240} height={240} src={about2} alt="about card2 img" />
                        </div>
                        <h3 className={styles['about__card__title']}>
                            2. Pay online easily
                        </h3>
                        <p className={styles['about__card__text']}>
                            Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.
                        </p>
                    </div>

                    <div className={styles['about__card']}>
                        <div>
                            <img className={styles['about__card__img']} width={240} height={240} src={about3} alt="about card2 img" />
                        </div>
                        <h3 className={styles['about__card__title']}>
                            3. Get your house cleaned
                        </h3>
                        <p className={styles['about__card__text']}>
                            Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.
                        </p>
                    </div>
                </div>

                <div className={styles['about__btns']}>
                    <button className={styles['get__quote__btn']}>
                        Get a free quote
                    </button>
                    <button className={styles['explore__btn']}>
                        Explore services
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About