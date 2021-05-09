import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import headshot from './images/headshot.jpeg';

const homeView = () => {
    return (
        <div className={style.home__main}>
            <div className={style.home__content}>
                <section className={style.home__text}>
                    <h1 className={style.home__intro}>Hi! I'm Tara,</h1>
                    <h2>a Full Stack Software Developer based in Columbus, Ohio.</h2>
                    <p>I'm particularly interested front-end development and accessible, responsive design, but I also love working on the back-end and building APIs. I'm most excited about tech when it allows users to nurture their creativity and curiosity, to ultimately lead fuller lives.</p><p></p>
                    <button className={style.moreAbout__button}><Link to='/about'>more
                    <span> about me {`>>`}</span></Link></button>
                </section>
                <section className={style.home__photo}>
                    <img src={headshot} alt="Headshot of the developer" className={style.dev__headshot}/>
                </section>
            </div>
        </div>
    )
}

export default homeView;

// I'm a full-stack developer with a particular interest in front-end development and accessible design. I'm most excited about tech when it allows users to nurture their creativity and curiosity and lead fuller lives.

// Before coming to tech, I studied literature and poetry and worked in the library and information science sector. I was attracted to coding because, like poetry, it requires an attention to detail and patterns, making connections between parts, and exploring the most effective and efficient ways to do or say something. 