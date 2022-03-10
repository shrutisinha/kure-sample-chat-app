import React from 'react';
import SendBird from 'sendbird';
import properties from '../config/properties';


const sb = new SendBird({
  appId: properties.SENDBIRD_API_ID,
  localCacheEnabled: true,
});

const useSendbird = () => {
  const [mainOpenChannel, setMainOpenChannel] = React.useState();

  const params = new sb.UserMessageParams();
  const channelHandler = new sb.ChannelHandler();


  const handleUserAdd = (userId, nickname, profileUrl) => {
    sb.connect(userId, (user, error) => {
      if (error) {
        // Handle error.
        sb.disconnect();
      }
      sb.updateCurrentUserInfo(nickname, profileUrl, () => {
        sb.disconnect()
      })
      // The user is connected to Sendbird server.

    });
  };

  const handleOpenChannel = () => {
    sb.OpenChannel.createChannel((openChannel, error) => {
      if (error) {
        // Handle error.
      } else {
        setMainOpenChannel(openChannel);
      }

      // An open channel is successfully created.
      // Through the 'openChannel' parameter of the callback function,
      // you can get the open channel's data from the result object that Sendbird server has passed to the callback function.
    });
  };

  const enterChannel = () => {
    // The CHANNEL_URL below can be retrieved using the openChannel.url.
    mainOpenChannel && sb.OpenChannel.getChannel(mainOpenChannel.url, (openChannel, error) => {
      if (error) {
        // Handle error.
      }

      // Call the instance method of the result object in the 'openChannel' parameter of the callback function.
      openChannel.enter((response, error) => {
        if (error) {
          // Handle error.
        }

        // The current user successfully enters the open channel,
        // and can chat with other users in the channel by using APIs.
      });
    });
  };

  const handleSendMessage = (sendMessage) => {
    params.message = sendMessage;

    mainOpenChannel?.sendUserMessage(params, (message, error) => {
      if (error) {
        // Handle error.
      }
      // The message is successfully sent to the channel.
      // The current user can receive messages from other users through the onMessageReceived() method of an event handler.
    });

  }

  const handleReceiveMessage = () => {

    channelHandler.onMessageReceived = (channel, message) => {
      //set the messag to state to display in ui
      console.log(message)
    };

    sb.addChannelHandler("UNIQUE_HANDLER_ID", channelHandler);    // The `UNIQUE_HANDLER_ID` is a unique identifier
    // to register multiple concurrent handlers.

  }

  return {
    handleUserAdd,
    handleOpenChannel,
    enterChannel,
    handleSendMessage,
    handleReceiveMessage
  };
};

export default useSendbird;
