import React from 'react';
import './index.css'
import { useChat } from './hook';

const Chat = () => {
    const {
        current,
        other
    } = useChat();

    return (current && other ? (
        <div className="chat" >
            Chat between {current.firstName} and {other.firstName}
        </div>
    ):(
        <div className="loading">
            Starting chat
        </div>
    )
    );
}

export default Chat;
