import React from 'react';
import {sendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialog";


const DialogContainer = (props) => {

    let state = props.store.getState().dialogPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (body) => {
       props.store.dispatch(UpdateNewMessageBodyCreator(body))
    };

    return (
        <Dialogs
            UpdateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogPage={state}
        />
    );
};

export default DialogContainer;
