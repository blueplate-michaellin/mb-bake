import React from 'react'
import Firebase, { FirebaseContext } from './src/services/index'

export const wrapRootElement = ({ element }) => (
    <FirebaseContext.Provider value={new Firebase()}>{element}</FirebaseContext.Provider>
)