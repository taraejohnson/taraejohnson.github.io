import React from 'react';
import style from './style.module.scss';

const contactView = () => {
    return (
        <div className={style.contact__main}>
            <div className={style.contact__content}>
            <h1 className={style.contact__h1}>&#58; CONTACT</h1>
                <section className={style.contact__text}>
                    <p>For all inquiries, I can be reached via <a href="mailto:taraest@gmail.com" id="email_link">email</a>.<br />
                    For more on my background, education, and experience, find me on <a href="https://www.linkedin.com/in/tara-e-johnson-a92a76201/" id="linkedin_link">Linkedin.</a><br />
                    To see my projects in detail, head to <a href="https://github.com/taraejohnson" id="github_link">Github</a>.
                    </p>
                </section>
                <section className={style.contact__photo}>
                    {/* <img src={headshot} alt="Headshot of the developer" className={style.dev__headshot}/> */}
                </section>
            </div>
        </div>
    )
}

export default contactView;