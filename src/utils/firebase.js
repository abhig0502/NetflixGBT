// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeXJbqqtI4qIyNuez-wkhbXnxqyeOZKjk",
  authDomain: "netflixgbt-74416.firebaseapp.com",
  projectId: "netflixgbt-74416",
  storageBucket: "netflixgbt-74416.appspot.com",
  messagingSenderId: "988405621245",
  appId: "1:988405621245:web:ef5366ea0af21381c33994",
  measurementId: "G-3GJXPPEN6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);