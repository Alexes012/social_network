import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.itemContainer}>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active}>Моя страница</NavLink>
                </div>
            </div>

            <div className={classes.itemContainer}>
                <div className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Сообщения</NavLink>
                </div>
            </div>

            <div className={classes.itemContainer}>
                <div className={classes.item}>
                    <NavLink to="/users" activeClassName={classes.active}>Пользователи</NavLink>
                </div>
            </div>

            <div className={classes.itemContainer}>
                <div className={classes.item}>
                    <a>Новости</a>
                </div>
            </div>

            <div className={classes.itemContainer}>
                <div className={classes.item}>
                    <a>Музыка</a>
                </div>
            </div>

            <div className={classes.itemContainer}>
                <div className={classes.item}>
                    <a>Настройки</a>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;