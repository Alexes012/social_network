import React from 'react';
import s from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <MyPost message={p.message}/>)

    let newPostElemetn = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElemetn.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>Мои записи</h3>
                <div>
                    <div>
                        <textarea
                            onChange={onPostChange}
                            ref={newPostElemetn}
                            value={props.newPostText}
                        />
                    </div>
                    <div>
                        <button onClick={onAddPost}>Опубликовать</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;