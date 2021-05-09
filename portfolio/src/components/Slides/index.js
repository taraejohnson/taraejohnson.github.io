import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import style from './style.module.scss';
import stanza1 from './images/stanza1.JPG';
import stanza2 from './images/stanza2.JPG';
import stanza3 from './images/stanza3.JPG';
import stanza4 from './images/stanza4.JPG';

const slideImages = [
    stanza1,
    stanza2,
    stanza3,
    stanza4
];

const Slideshow = () => {
    
    const properties = {
        duration: 5000,
        autoplay: false,
        transitionDuration: 500,
        arrows: true,
        infinite: true,
        easing: 'ease',
        indicators: true
    }
        
    return (
       <div className={style.slide__main}>    
            <div className={style.slide__container}>
                <Slide {...properties}>
                    <div className={style.each__slide}>
                        <img src={slideImages[0]} alt="Screenshot of Stanza app" className={style.slide} />
                    </div>
                    <div className={style.each__slide}>
                        <img src={slideImages[1]} alt="Screenshot of Stanza app text edit page" className={style.slide} /> 
                    </div>
                    <div className={style.each__slide}>
                        <img src={slideImages[2]} alt="Screenshot of Stanza app user page" className={style.slide} /> 
                    </div>
                    <div className={style.each__slide}>
                        <img src={slideImages[3]} alt="Screenshot of Stanza app discover page" className={style.slide} /> 
                    </div>
                </Slide>
            </div>
        </div> 
        )
    }


export default Slideshow;