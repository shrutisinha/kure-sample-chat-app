import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getUsersByQuery } from '../../utils/helper';

export const useChat = () => {
    const [current, setCurrent] = useState();
    const [other, setOther] = useState();
    const { currentId, otherId } = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setCurrent(state.current);
            setOther(state.other)
        } else {
            getUsersByQuery("id", "==", currentId).then(users=>{
                if(users && users.length){
                    setCurrent(users[0]);
                }
            });
            getUsersByQuery("id", "==", otherId).then(users=>{
                if(users && users.length){
                    setOther(users[0]);
                }
            });
        }
    }, [state]);

    return {
        currentId,
        otherId,
        current,
        other
    }
}