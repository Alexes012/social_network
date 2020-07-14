import React from 'react';
import s from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../helpComponents/formsControls/FormsControls";


const maxLenght10 = maxLenghtCreator(10);

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <MyPost message={p.message}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>Мои записи</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="newPostText" component={Textarea} validate={[required, maxLenght10]}

                />
            </div>
            <div><button>Опубликовать</button></div>
        </form>
    )
};

let AddNewPostFormRedux = reduxForm ({form: "profileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;