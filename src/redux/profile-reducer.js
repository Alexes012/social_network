const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Привет, этом мой первый пост', likesCount: 0},
        {id: 2, message: 'Подписывайтесь на канал, ставьте лайки', likesCount: 25}
    ],
    newPostText: ''
};

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return (state);
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newtext;
            return (state);
        default:
            return (state)
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const UpdateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newtext: text
});

export default ProfileReducer;