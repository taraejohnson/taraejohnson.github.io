import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./style.module.scss";

const Header = () => {    

    return (

        <div className={style.header__container}>
            <h1 className={style.initial} id='initials'>T<span>ara E. </span>J<span>ohnson</span></h1>
            <div className={style.nav__container}>
                <NavLink exact activeClassName={style.active} to='/'>Home</NavLink>
                <NavLink exact activeClassName={style.active} to='/about'>About</NavLink>
                <NavLink exact activeClassName={style.active} to='/projects'>Projects</NavLink>
                <NavLink exact activeClassName={style.active} to='/resume'>Resume</NavLink>
                <NavLink exact activeClassName={style.active} to='/contact'>Contact</NavLink>
            </div>
        </div>
    )

}

export default Header;

