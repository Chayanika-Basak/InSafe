import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore, firestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCIPnXczIbVwudVZati8-OHRVSylBFVOTs",
    authDomain: "hackunicorn-8a1ce.firebaseapp.com",
    projectId: "hackunicorn-8a1ce",
    storageBucket: "hackunicorn-8a1ce.appspot.com",
    messagingSenderId: "758574644115",
    appId: "1:758574644115:web:bd641b1e041c7567074666"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);