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
        ]
};

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                Messages: [...state.Messages, {id: 4, message: body}]
            };
        default:
            return (state);
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default DialogsReducer;