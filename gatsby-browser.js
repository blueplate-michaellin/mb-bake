import React from 'react';
import FirebaseProvider from './src/containers/FirebaseProvider';

import firebase from './src/services/firebase';

export const wrapRootElement = ({ history }) => {
  const ConnectedRouteElement = ({ children }) => (
    <FirebaseProvider firebase={firebase}>
      <Router history={history}>{children}</Router>
    </FirebaseProvider>
  );

  return ConnectedRouteElement;
};