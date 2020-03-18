import React from 'react';
import s from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi blablabalba', likesCount: 0},
        {id: 2, message: 'ggsfoghsogsoghsdoighsd', likesCount: 25}
    ];

    let postsElements = posts.map (p => <MyPost message={p.message}/>)

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
                < /div>
            </div>
            );
            }

            export default MyPosts;