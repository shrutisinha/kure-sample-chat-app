import React from 'react';
import './index.css'

const UserItem = ({ userInfo, handleClick = () => { } }) => {
    return (
        <div className="item" onClick={() => handleClick(userInfo)}>
            <div className="name">
                {userInfo.firstName}
            </div>
            <div className="phone">
                {userInfo.mobileNumber}
            </div>
        </div>
    );
}

export default UserItem;
