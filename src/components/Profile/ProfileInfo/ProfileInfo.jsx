import React from 'react';
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {

    return (
        <div className={s.discriptonBlock}>
            <div className={s.container}>
                <div className={s.image}>
                    <div className={s.photo}/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;