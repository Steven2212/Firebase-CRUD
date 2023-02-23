import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAQe2wTt4b6gqzZ_Pl0lZO2r8sYKqT1BBM",
    authDomain: "tutorial-1db61.firebaseapp.com",
    projectId: "tutorial-1db61",
    storageBucket: "tutorial-1db61.appspot.com",
    messagingSenderId: "369168135605",
    appId: "1:369168135605:web:5ce8a0870f9ec275e195fc"
  };
  

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);