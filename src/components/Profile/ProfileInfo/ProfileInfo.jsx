import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../helpComponents/preloader";
import ProfileStatuus from "./ProfileStatuus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.discriptonBlock}>
            <div className={s.container}>
                <div className={s.image}/>
            </div>
            <div className={s.containerDS}>
                <div className={s.userPhoto}>
                    <img src={props.profile.photos.large}/>
                </div>
                <div className={s.discription}>
                    <ProfileStatuus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;