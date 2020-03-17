import React from 'react';
import s from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img
                        src='https://avatars.mds.yandex.net/get-pdb/1605014/85a5a494-87e9-48e2-93a3-156452ea233c/s1200?webp=false'/>
                    {props.message}
                    <div>
                        <span>like</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPost;