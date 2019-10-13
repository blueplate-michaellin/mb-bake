import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from './index'


export const AuthContext = React.createContext()

export default function AuthContextProvider(props) {
    const [ authUser, setAuthUser ] = useState(null)
    const Firebase = useContext(FirebaseContext)

    useEffect(() => {
        Firebase.auth.onAuthStateChanged(setAuthUser);
        console.log(setAuthUser)
        return () => {
            Firebase.auth.signOut()
        }
    }, [])

    console.log('on auth context provider');
    return (
        <AuthContext.Provider value={{ authUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}