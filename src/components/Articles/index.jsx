import React from 'react'

import img from '../../assets/images/articles-1.png';
import img2 from '../../assets/images/articles-2.png';

import style from './articles.module.css';

export const Articles = () => {
  return ( 
    <section id='articles' className={style['articles']}>
        <div className="container">
            <div className={style['articles__intro__box']}>
                <h3 className={style['articles__title']}>Articles & resources</h3>
                <div>
                    <button className={style['articles__btn__quote']}>Get a free quote</button>
                    <button className={style['articles__btn__article']}>Browse articles</button>
                </div>
            </div>
            <div className={style['article__wrapper']}>
                <div className={style['article__wrapper__right']}>
                    <img src={img} alt="left" />
                    <div className={style['right__inner']}>
                        <h4 className={style['right__title']}>
                            8 best vacuum cleaners to clean any mess for your home in 2022
                        </h4>
                        <p className={style['right__text']}>
                            Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.
                        </p>
                        <p className={style['right__date']}>Jan 28, 2022</p>
                    </div>
                </div>
                <div className={style['article__wrapper__left']}>
                    <img src={img2} alt="right" />
                        <div className={style['right__inner']}>
                            <h4 className={style['right__title']}>
                                How to properly disinfect your phone and other electronics
                            </h4>
                            <p className={style['right__text']}>
                                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.
                            </p>
                            <p className={style['right__date']}>Feb 1, 2022</p>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Articles