import React from 'react';
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://cinema-quest.by/wp-content/uploads/2019/09/certificateBg-1024x251.jpg'/>
            </div>
            <div className={s.discriptonBlock}>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;