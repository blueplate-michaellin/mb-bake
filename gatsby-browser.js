import React from 'react'
import Firebase, { FirebaseContext } from './src/services/firebase'

export const wrapRootElement = ({ element }) => (
    <FirebaseContext.Provider value={new Firebase()}>{element}</FirebaseContext.Provider>
)