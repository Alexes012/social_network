import React from 'react';
import s from './Dialogs.module.css'
import DialigItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogPage;

    let DialogsElements = state.Dialogs.map(d => <DialigItem name={d.name} key={d.id} id={d.id}/>);
    let MessageElements = state.Messages.map(m => <Message text={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.UpdateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                <div>{MessageElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder="Введите сообщение"
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
