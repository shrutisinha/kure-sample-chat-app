import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsersByQuery } from '../../utils/helper';

export const useLogin = () => {
    const [currentUser, setCurrentUser] = useState();
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            //  navigate(`/${currentUser.id}/list`, { state: currentUser });
            // using sendgrid uikit sdk
            navigate(`/${currentUser.id}/sendbird`, { state: currentUser });
        }
    }, [currentUser]);

    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

    const onSubmit = async (e) => {
        e.preventDefault();
        const user = await getUsersByQuery('mobileNumber', '==', phoneNumber);
        if (user && user.length) setCurrentUser(user[0]);
        setPhoneNumber('');
    };

    return {
        currentUser,
        phoneNumber,
        handlePhoneNumberChange,
        onSubmit
    }
}