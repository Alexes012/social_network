import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialigItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};
const Message = (props) => {
    return <div className={s.message}>{props.text}</div>
};

const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: 'Lexa'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Tonya'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Dima'},
    ];
    let MessageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'YO'},
    ];


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialigItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialigItem name={DialogsData[1].name} id={DialogsData[1].id}/>

            </div>
            <div className={s.messages}>
                <Message text={MessageData[0].message}/>
                <Message text={MessageData[1].message}/>
                <Message text={MessageData[2].message}/>
            </div>
            < /div>
                );
                }
                export default Dialogs;