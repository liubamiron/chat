import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ4csYJtyhug1SBvvH-NqASiIKW3671hk",
  authDomain: "cnat-react.firebaseapp.com",
  projectId: "cnat-react",
  storageBucket: "cnat-react.appspot.com",
  messagingSenderId: "757692394696",
  appId: "1:757692394696:web:2a0501d58338293f9949fd",
  measurementId: "G-L9JZBS6F17"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const firestore = getStorage(app)
export const db = getFirestore(app);

export const Context = createContext(null);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      auth,
      db,
      firestore
    }}
  >
    <App />
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
