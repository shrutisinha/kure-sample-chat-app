import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getUsersByQuery } from '../../utils/helper';

export const useUsersList = () => {
    const [usersData, setUsersData] = useState([]);
    const [currentUser, setCurrentUser] = useState();

    const { currentId } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    // on page load, get all users who are CONFIRMED_VIA_SMS
    useEffect(async () => {
        const users = await getUsersByQuery("status", "==", 'CONFIRMED_VIA_SMS');
        setUsersData(users);
    }, []);

    useEffect(async () => {
        if (currentId) {
            if (state) {
                setCurrentUser(state)
            } else {
                const users = await getUsersByQuery("id", "==", currentId);
                if (users && users.length) setCurrentUser(users[0]);
            }
        }
    }, [state, currentId]);

    const handleUserClick = (userInfo) => {
        navigate(`../${currentUser.id}/chat/${userInfo.id}`, {
            state: {
                current: currentUser,
                other: userInfo
            },
            replace: true
        })
    }

    return {
        currentUser,
        usersData,
        handleUserClick
    }
}