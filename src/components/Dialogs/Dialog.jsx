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

    let Dialogs = [
        {id: 1, name: 'Lexa'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Tonya'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Dima'},
    ];

    let Messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'YO'},
    ];

    let DialogsElements = Dialogs.map(d => <DialigItem name={d.name} id={d.id}/>);

    let MessageElements = Messages.map(m => <Message text={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessageElements}
            </div>
            < /div>);
                }
                export default Dialogs;