import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет, этом мой первый пост', likesCount: 0},
                {id: 2, message: 'Подписывайтесь на канал, ставьте лайки', likesCount: 25}
            ],
            newPostText: ''
        },
        dialogPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = ProfileReducer (this._state.profilePage, action);
        this._state.dialogPage = DialogsReducer (this._state.dialogPage, action);
        this._callSubscriber(this._state);
    }
};





export default store;
window.store = store;