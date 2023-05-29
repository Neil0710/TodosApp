import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCEIlXCOsIZIEX3bZpbqup2WzlXhbzVYHs",
    authDomain: "todosappbynileshnirgude.firebaseapp.com",
    projectId: "todosappbynileshnirgude",
    storageBucket: "todosappbynileshnirgude.appspot.com",
    messagingSenderId: "515807214694",
    appId: "1:515807214694:web:02f15da87123530d9a01a7",
    measurementId: "G-0SLTH4YQPN"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export { db };