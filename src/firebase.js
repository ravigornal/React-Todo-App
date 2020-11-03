import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4jhjO3TSAI7Rwux2H1MFBZXxqWpbLHn0",
    authDomain: "todo-app-21f07.firebaseapp.com",
    databaseURL: "https://todo-app-21f07.firebaseio.com",
    projectId: "todo-app-21f07",
    storageBucket: "todo-app-21f07.appspot.com",
    messagingSenderId: "1060702997001",
    appId: "1:1060702997001:web:9fa5ae6d0389c7a9f406d8",
    measurementId: "G-PM0NLJL9QH"

});


const db = firebaseApp.firestore();

export default db;