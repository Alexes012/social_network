import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logOut}>Выйти</button></div>
                : <NavLink to={'/login'}>Авторизоватся</NavLink> }
            </div>
        </header>
    );
};

export default Header;