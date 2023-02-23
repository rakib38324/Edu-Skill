import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut}from 'firebase/auth';
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const GoogleProvider = new GoogleAuthProvider();
 
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    const signUpWitGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('User Observing');
            setUser(currentUser)
            setLoading(false)
        });

        return () => unsubscribe();
    },[])


    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        signUpWitGoogle
    }

    console.log(user)

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;