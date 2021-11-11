//  Load Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js'

// Add Firebase products that you want to use
import { getFirestore, collection, addDoc, getDoc, getDocs, doc, query, setDoc, updateDoc, GeoPoint } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPSSZTxfN21Loqu4WfhSkTBNPOVxIQLu4",
    authDomain: "hotel-website-59961.firebaseapp.com",
    projectId: "hotel-website-59961",
    storageBucket: "hotel-website-59961.appspot.com",
    messagingSenderId: "633745579152",
    appId: "1:633745579152:web:6f5b3e5eda5618f9e24c15",
    measurementId: "G-4PEEVK84HW"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export const hotelDb = await getDocs(collection(db, "hotels"));
