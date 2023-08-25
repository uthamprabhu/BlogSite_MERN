import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// firebase
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAMcuFRHMtHFk95yd5kyivsF7rFGSTxMwc",
  authDomain: "my-react-blog-4a4d0.firebaseapp.com",
  projectId: "my-react-blog-4a4d0",
  storageBucket: "my-react-blog-4a4d0.appspot.com",
  messagingSenderId: "633004150246",
  appId: "1:633004150246:web:389e601a97f2901ec61a27"
};

const app = initializeApp(firebaseConfig);

//normal react root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
