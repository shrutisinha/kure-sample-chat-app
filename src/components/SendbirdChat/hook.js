import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import axios from 'axios';
import { getUsersByQuery } from '../../utils/helper';
// import properties from '../../config/properties';
import useSendbird from '../../hooks/useSendbird';

export const useSendbirdChat = () => {
    const [currentUser, setCurrentUser] = useState();
    const { currentId } = useParams();
    const { state } = useLocation();
    const { handleUserAdd } = useSendbird();

    useEffect(async () => {
        if (state) {
            setCurrentUser(state)
        } else {
            const users = await getUsersByQuery("id", "==", currentId);
            if (users && users.length) setCurrentUser(users[0]);
        }
    }, [state, currentId]);

    useEffect(async () => {

        const users = await getUsersByQuery("status", "==", 'CONFIRMED_VIA_SMS');
        users.forEach(user => {
            //add all users to sendbird on component load (not able to find a way to add multiple users from SDK)
            // This is unsafe since exposes access tokens of all added users
            // axios call failed
            // const headers = {
            //     'Content-Type': 'application/json; charset=utf8',
            //     'Api-Token': properties.SENDBIRD_API_ID
            // };
            // axios.post(
            //     `https://api-${properties.SENDBIRD_API_ID}.sendbird.com/v3/users`,
            //     {
            //         user_id: user.id,
            //         nickname: user.firstName || user.lastName,
            //         profile_url: user.profilePictureUrl
            //     },
            //     {
            //         headers
            //     }
            // ).catch(e => console.error("Error in creating user", e))

            //can add users by creating connection.
            //not able to add all users due to rate limit (added 3)
            // handleUserAdd(user.id, user.firstName || user.lastName, user.profilePictureUrl)
        })
    }, []);

    // const sendBirdQuery = useCallback(() => {
    //     const retObj = {
    //         hasNext: true,
    //         next: ((callback) => {
    //             retObj.hasNext = false;
    //             getUsersByQuery("status", "==", 'CONFIRMED_VIA_SMS').then(users => {
    //                 callback(users?.map(user => ({
    //                     userId: user.id,
    //                     nickname: user.firstName || user.lastName,
    //                     profileUrl: user.profilePictureUrl
    //                 })))
    //             });
    //         })
    //     };
    //     return retObj;
    // })

    return {
        currentUser,
        // sendBirdQuery
    }
}