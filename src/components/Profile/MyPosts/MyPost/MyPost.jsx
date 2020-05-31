import React from 'react';
import s from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src='https://sun9-65.userapi.com/c855224/v855224266/1ead22/j0xxrYB8JRo.jpg'/>
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