import React from 'react';
import './index.css'
import { useUsersList } from './hook';
import UserItem from '../UserItem';
// import firebase from 'firebase';

const UsersList = () => {

    const {
        usersData,
        handleUserClick
    } = useUsersList();

    return (
        <div className="list">
            <h1>Click on a user to chat</h1>
            <ul>
                {usersData?.map((user) =>
                    <UserItem
                        key={user.id}
                        userInfo={user}
                        handleClick={handleUserClick}
                    />)}
            </ul>
        </div>
    );
}

export default UsersList;
