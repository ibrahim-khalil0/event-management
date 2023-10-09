import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";


export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, newUser => {
            console.log('user added')
            setUser(newUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authDetails = {
        user,
        createNewUser,
        signIn,
        signInWithGoogle,
        logOut,
        loading
    }
     
    return (
        <div>
            <AuthContext.Provider value = {authDetails}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;