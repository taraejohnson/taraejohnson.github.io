import React from 'react';
import Slideshow from '../../components/Slides';
import style from './style.module.scss';
import donut1 from './images/donutmaker1.JPG';


const projectsView = () => {
    return (
        <div className={style.projects__main}>
            <div className={style.projects__container}>
                <h1 className={style.projects__h1}>&#58; PROJECTS</h1>
                    <section className={style.single__project__container}>
                        <h2 className={style.project__title}>STANZA: A web app for poets</h2>
                        <h3 className={style.project__stack}>JavaScript (vanilla) | Java (Spring) | RESTful API | AJAX</h3>
                        <Slideshow />
                    <p className={style.project__text}>Stanza is a web application built for creative writers. Stanza features a fully-functional rich text editor that allows users to compose work that can be saved to the application and retrieved later for editing--alongside API-powered tools that provide valuable inspiration and guidance while users shape their poems.</p>
                    <a href="https://github.com/taraejohnson/Stanza" className={style.project__link}>See it on Github.</a>
                </section>
                <section className={style.single__project__container}>
                        <h2 className={style.project__title}>DONUT MAKER</h2>
                    <h3 className={style.project__stack}>JavaScript (vanilla with Jasmine for testing)</h3>
                        <img src={donut1} alt="Screenshot of donut maker game" className={style.donut__photo}/>
                    <p className={style.project__text}>A simple but nicely-styled JavaScript game inspired by <a href="http://orteil.dashnet.org/cookieclicker/">Cookie Clicker</a>. User clicks increase donut conut, and donuts can be used to 'buy' multipliers, which increase the value of a click, or auto-clickers, which generate donuts at regular intervals.</p>
                    <a href="https://github.com/taraejohnson/Donut-Maker" className={style.project__link}>See it on Github.</a>
                    </section>
            </div>
        </div>
    )
}

export default projectsView;