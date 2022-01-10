import React from 'react';
import style from './style.module.scss';

const contactView = () => {
    return (
        <div className={style.contact__main}>
            <div className={style.contact__content}>
                <section className={style.contact__text}>
                    <p>For all inquiries, I can be reached via <a href="mailto:taraest@gmail.com" id="email_link">email</a>.<br />
                    For more on my background, education, and experience, find me on <a href="https://www.linkedin.com/in/tara-e-johnson-a92a76201/" id="linkedin_link">LinkedIn.</a><br />
                    To see my projects in detail, head to <a href="https://github.com/taraejohnson" id="github_link">Github</a>.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default contactView;