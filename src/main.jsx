import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import CartContexProvider from './components/CartContex.jsx';

const firebaseConfig = {
  apiKey: "AIzaSyBJ7duf2hAS8ZOi_T-6Z6tQqlsiEFd9szs",
  authDomain: "solosole-37f1d.firebaseapp.com",
  projectId: "solosole-37f1d",
  storageBucket: "solosole-37f1d.appspot.com",
  messagingSenderId: "1001636342557",
  appId: "1:1001636342557:web:2cabbd07ef565069804ff4"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <CartContexProvider>
      <App />
    </CartContexProvider>
  </React.StrictMode>,
)
