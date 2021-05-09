import React from 'react';
import style from "./style.module.scss";

// const showYear = () => {
//     var d = new Date();
//     var year = d.getFullYear();
//     return year;
// }

const Footer = () => {
    return (
        <div className={style.footer__container}>
            {/* <i class="fab fa-linkedin"></i>
            <i class="fab fa-github-square"></i> */}
            Tara E. Johnson
        </div>
    )
}

export default Footer;