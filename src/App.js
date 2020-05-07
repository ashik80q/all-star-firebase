import React from 'react';

import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

function App() {

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () =>{
    firebase.auth().signInWithPopup(provider)
    .then(res =>{
    const {displayName, photoURL, email} = res.user;
    console.log(displayName, photoURL, email);
    
      
    })
    
  }
  
  return (
    <div className="App">

    <button onClick={handleSignIn}>Sign-In</button>   
    </div>
  );
}

export default App;
