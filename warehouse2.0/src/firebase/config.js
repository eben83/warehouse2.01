import firebase from 'firebase/app'
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCSUDJj8DmCu5cF_x3GrKX1DKTgcxO3KR4",
    authDomain: "warehouse-a38c7.firebaseapp.com",
    projectId: "warehouse-a38c7",
    storageBucket: "warehouse-a38c7.appspot.com",
    messagingSenderId: "83582470054",
    appId: "1:83582470054:web:be9617551ead61b5ed3167"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestampe = firebase.firestore.FieldValue.serverTimestamp()

export { timestampe }

export default firebaseApp.firestore()