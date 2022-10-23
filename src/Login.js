import React, {useState} from 'react';
import "./Login.css"
import 'firebase/compat/auth';
import {login} from "./features/userSlice";
import {useDispatch} from "react-redux";
import firebase from 'firebase/compat/app';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const auth = firebase.auth();

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!");
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoUrl: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid:userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    })
            }).catch((error) => alert(error));
    };



    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth=> {
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    profileUrl:userAuth.user.photoUrl,
                }))
            }).catch((error)=>alert(error))
    }

    return (<div className="login">
        <img
            src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
            alt=""/>
        <form >
            <input value={name} onChange={(e) => setName(e.target.value)}
                   placeholder="Full name (required if registering)" type="text"/>
            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text"
                   placeholder="Profile pic URL (optional)"/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                   placeholder="Password"/>
            <button className="blueButton" onClick={loginToApp} type="submit">Sign In</button>
        </form>

        <p> Not a member?{" "}
            <span className="login__register" onClick={register}>
            Register Now</span>
        </p>
    </div>);
}

export default Login;
