import React from "react";
import styles from './Preloader.module.css'
import loadingSVG from "../../assets/images/preloader.gif";

const Preloader = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src={loadingSVG}/>
            </div>
        </div>
    )
}

export default Preloader