import './App.css';
import React, {useEffect} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './features/userSlice';
import Login from "./Login";
import firebase from 'firebase/compat/app';
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);

  const auth= firebase.auth();
  const dispatch = useDispatch();

  useEffect(()=>{
      auth.onAuthStateChanged((userAuth)=>{
          if(userAuth) {
           dispatch(login({
               email:userAuth.email,
               uid: userAuth.uid,
               displayName:userAuth.displayName,
               photoUrl: userAuth.photoURL,
           }))
          } else {
              dispatch(logout());
          }
      })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
         <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
