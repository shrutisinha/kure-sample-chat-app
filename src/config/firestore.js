import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import properties from './properties';

const firebaseConfig = {
  apiKey: properties.REACT_APP_FIRESTORE_apiKey,
  authDomain: properties.REACT_APP_FIRESTORE_authDomain,
  databaseURL: properties.REACT_APP_FIRESTORE_databaseURL,
  projectId: properties.REACT_APP_FIRESTORE_projectId,
  storageBucket: properties.storageBucket,
  messagingSenderId: properties.messagingSenderId,
  appId: properties.REACT_APP_FIRESTORE_appId,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


export default db;