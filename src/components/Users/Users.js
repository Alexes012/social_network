import React from "react";
import styles from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    followed: false,
                    photoUrl: 'https://naprawakomputerow.pc.pl/wp-content/uploads/2016/09/Depositphotos_7758583_original.jpg',
                    fullName: 'Alexei',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    followed: true,
                    photoUrl: 'https://naprawakomputerow.pc.pl/wp-content/uploads/2016/09/Depositphotos_7758583_original.jpg',
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 2,
                    followed: false,
                    photoUrl: 'https://naprawakomputerow.pc.pl/wp-content/uploads/2016/09/Depositphotos_7758583_original.jpg',
                    fullName: 'Dmitry',
                    status: 'I am not a boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    };

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div className={styles.Image}>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>FOLLOW</button>}
                    </div>
                </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
                </div>
            )}
        </div>
    )
};

export default Users;