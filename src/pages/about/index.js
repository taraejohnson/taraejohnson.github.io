import React from 'react';
import style from './style.module.scss';
//import lockup from './images/IMG_3226.jpeg';

const aboutView = () => {
    return (
        <div className={style.about__main}>
            <div className={style.about__content}>
            <h1 className={style.about__h1}>&#58; ABOUT</h1>
                <section className={style.about__text}>
                    <p>Before my training in software development, I studied literature and poetry. I was attracted to coding because, like poetry, it requires an attention to detail and patterns, making connections between parts, and exploring the most effective and efficient ways to do or say something.</p>
                    <p>My earlier professional background is in libraries and bookselling, and I'm especially interested in tech in libraries, publishing, and literature/literacy. Some of my other interests include letterpress printing and printmaking, literary translation, my dog and my houseplants, and PC gaming.</p>
                    <p>This site was built using REACT.</p>
                </section>
            </div>
        </div>
    )
}

export default aboutView;