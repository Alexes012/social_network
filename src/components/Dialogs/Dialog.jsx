import React from 'react';
import s from './Dialogs.module.css'
import DialigItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../helpComponents/formsControls/FormsControls";

const maxLenght50 = maxLenghtCreator(50);
const Dialogs = (props) => {

    let state = props.dialogPage;

    let DialogsElements = state.Dialogs.map(d => <DialigItem name={d.name} key={d.id} id={d.id}/>);
    let MessageElements = state.Messages.map(m => <Message text={m.message} key={m.id}/>);

    let addnewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                <div>{MessageElements}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addnewMessage}/>
                </div>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Введите сообщение"
                       validate={[required, maxLenght50]}
                />
            </div>
            <div><button>Отправить</button></div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;
