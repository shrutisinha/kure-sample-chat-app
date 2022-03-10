
import db from '../config/firestore';
import { getDocs, query, where, collection, limit } from "firebase/firestore";

export const getUsersByQuery = async (fieldName, comparator, value, limitValue=30) => {
    const q = query(collection(db, "usersContacts"), where(fieldName, comparator, value), limit(limitValue));
    const querySnapshot = await getDocs(q);
    const users = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data()); //consoles 30 filtered users
        users.push(doc.data());
    });
    return users;
}