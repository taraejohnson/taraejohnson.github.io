import React from 'react';
import style from './style.module.scss';
import lockup from './images/lockup.jpeg';

const aboutView = () => {
    return (
        <div className={style.about__main}>
            <div className={style.about__content}>
                <section className={style.about__text}>
                    <p>Before my training in software development, I studied literature and poetry. I was attracted to coding because, like poetry, it requires an attention to detail and patterns, making connections between parts, and exploring the most effective and efficient ways to do or say something.</p>
                    <p>My earlier professional background is in libraries and bookselling, and I'm especially interested in tech in libraries, publishing, and literature/literacy. Some of my other interests include letterpress printing and printmaking, literary translation, bicycling, and PC gaming.</p>
                    <p>I'm from Indiana and I currently live in Columbus, Ohio with my dog, two cats, a lot of houseplants, and my girlfriend.</p>
                    <p>This site was built using REACT.</p>
                </section>
                <section className={style.about__image}>
                    <img src={lockup} alt="A chase locked up with type handset by me." className={style.lockup__image} />
                    <figcaption className={style.lockup__caption}>A chase for a Chandler & Price platen press, locked up with type handset by me.</figcaption>
                </section>
            </div>
        </div>
    )
}

export default aboutView;