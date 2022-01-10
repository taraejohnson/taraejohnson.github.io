import React from 'react';
import style from './style.module.scss';
import Resume from './images/Resume.png';


const resumeView = () => {
    return (
        <div className={style.resume__main}>
            <div className={style.resume__content}>
                <img src={Resume} alt="Resume" className={style.resume__image} />
            </div>
        </div>
    )
}

export default resumeView;