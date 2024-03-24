

import style from './Contact.module.css';

import img from '../../assets/images/phone.png';

export const Contact = () => {
  return (
    <section id='contact' className={style['contact']}>
        <div className={`container ${style["contact__container"]}`}>
            <div className={style['contact__left']}>
                <h2>
                    Contact Us
                </h2>
                <p>
                    In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.
                </p>
                <div>
                    <img src={img} alt="contact" />
                    <div>
                        Call us now
                        <a href="tel:(414)567-2109">(414) 567 - 2109</a>
                    </div>
                </div>
                <h3>
                    Not convinced yet?
                </h3>
                <p>
                    Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.
                </p>
                <button>
                    Browse our packages
                </button>
            </div>
            <div className={style['contact__right']}>
                <div className={style['contact__form']}>
                    <label htmlFor="name">
                        Full name
                        <input type="text" name="" id="name" />
                    </label>
                    <label htmlFor="phone">
                        Phone number
                        <input type="text" name="" id="phone" />
                    </label>
                </div>
                <div className={style['contact__form']}>
                    <label htmlFor="adress">
                        Address
                        <input type="text" name="" id="adress" />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input type="text" name="" id="email" />
                    </label>
                </div>
                <div className={style['contact__form']}>
                    <label htmlFor="service">
                        Requested service
                        <input type="text" name="" id="service" />
                    </label>
                    <label htmlFor="day">
                        Day of service
                        <input type="text" name="" id="day" />
                    </label>
                </div>
               <label htmlFor="textarea">
                    Add a note
                    <textarea  className={style['textarea']} id="textarea" cols="30" rows="10"></textarea>
               </label>
            </div>
        </div>
    </section>
  )
}

export default Contact;