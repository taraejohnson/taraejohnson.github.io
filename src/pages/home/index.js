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
                    <h2>a Software Engineer based in Columbus, Ohio.</h2>
                    <p>I love building software, applications, & websites that expand access to information of all kinds. Currently, I am fortunate enough to be doing just that, working on software used by libraries worldwide.
                    <p></p>
                    I believe tech is at its best when it helps users nurture their creativity and curiosity—to ultimately lead fuller, happier lives.</p><p></p>
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