const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        Dialogs: [
            {id: 1, name: 'Леха'},
            {id: 2, name: 'Саша'},
            {id: 3, name: 'Света'},
            {id: 4, name: 'Толик'},
            {id: 5, name: 'Валера'},
            {id: 6, name: 'Дима'},
        ],
        Messages: [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Как дела?'},
            {id: 3, message: 'Что нового?'}
        ],
        newMessageBody: ''
};

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                Messages: [...state.Messages, {id: 4, message: body}]
            };
        default:
            return (state);
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const UpdateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default DialogsReducer;