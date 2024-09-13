import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXcLGnOz69KbhOenM4L4dLvEDs9pAqE90",
  authDomain: "proelec-web.firebaseapp.com",
  projectId: "proelec-web",
  storageBucket: "proelec-web.appspot.com",
  messagingSenderId: "530640696463",
  appId: "1:530640696463:web:89ea509621c03f181eecfa",
  measurementId: "G-551GZNQTRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {app, analytics, db}