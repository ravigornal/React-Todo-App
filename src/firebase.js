import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAINbYLrivy-cRETEDk7fG-EYHBTMbLaBw",
    authDomain: "react-todo-84710.firebaseapp.com",
    databaseURL: "https://react-todo-84710.firebaseio.com",
    projectId: "react-todo-84710",
    storageBucket: "react-todo-84710.appspot.com",
    messagingSenderId: "855824819551",
    appId: "1:855824819551:web:75f3d0a2a3c5c50f8902ea",
    measurementId: "G-ZRKYMZ3WZ3"
});


const db = firebaseApp.firestore();

export default db;