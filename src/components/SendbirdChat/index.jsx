import React, { useState } from 'react';
import {
    // SendBirdProvider,
    // ChannelList,
    // Channel,
    // ChannelSettings,
    App as SendbirdApp
} from 'sendbird-uikit';
import 'sendbird-uikit/release/dist/index.css';
import './index.css'
import properties from '../../config/properties';
import { useSendbirdChat } from './hook';

const SendbirdChat = () => {

    const [showSettings, setShowSettings] = useState(false);
    const [currentChannelUrl, setCurrentChannelUrl] = useState(null);

    const {
        currentUser,
        // sendBirdQuery,
    } = useSendbirdChat();

    return (
        currentUser ?
            <div className="chatBox">
                <SendbirdApp
                    appId={properties.SENDBIRD_API_ID}
                    userId={currentUser.id}
                    nickname={currentUser.firstName}
                />
                {/* Below code showed all 30 users when trying to create group, since users were not added, chat couldn't be initiated */}
                {/* <SendBirdProvider
                    appId={properties.SENDBIRD_API_ID}
                    userId={currentUser.id}
                    nickname={currentUser.firstName}
                    // userListQuery={sendBirdQuery}
                >
                    <div className="sendbird-app__wrap">
                        <div className="sendbird-app__channellist-wrap">
                            <ChannelList
                                onChannelSelect={(channel) => {
                                    if (channel && channel.url) {
                                        setCurrentChannelUrl(channel.url);
                                    }
                                }}
                            />
                        </div>
                        <div className="sendbird-app__conversation-wrap">
                            <Channel
                                channelUrl={currentChannelUrl}
                                onChatHeaderActionClick={() => { setShowSettings(true); }}
                            />
                        </div>
                    </div>
                    {showSettings && (
                        <div className="sendbird-app__settingspanel-wrap">
                            <ChannelSettings
                                channelUrl={currentChannelUrl}
                                onCloseClick={() => { setShowSettings(false); }}
                            />
                        </div>
                    )}
                </SendBirdProvider> */}
            </div>
            : null
    );
}

export default SendbirdChat;
