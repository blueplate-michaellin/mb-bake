import React from 'react'
import Firebase, { FirebaseContext } from './src/services/index'
import AuthContextProvider from './src/services/authContext'

export const wrapRootElement = ({ element }) => (
    <FirebaseContext.Provider value={new Firebase()}>
        <AuthContextProvider>
            {element}
        </AuthContextProvider>
    </FirebaseContext.Provider>
)