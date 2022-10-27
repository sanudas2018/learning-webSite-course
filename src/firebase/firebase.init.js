// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGVK0PbmOaE9f4mOhI138-ex8pIQqFQUM",
  authDomain: "open-door-learner.firebaseapp.com",
  projectId: "open-door-learner",
  storageBucket: "open-door-learner.appspot.com",
  messagingSenderId: "227836812281",
  appId: "1:227836812281:web:8abaa0808ce139d030fb28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;