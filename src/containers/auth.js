import React from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    uid: '',
    isAnonymous: null,
    // TODO: Add some other properties from the user object
}

class Auth extends React.Component {
    static propTypes = {
        children: PropTypes.func.isRequired,
    };

    static contextTypes = {
        firebase: PropTypes.object,
    }

    state = INITIAL_STATE;

    componentDidMount() {
        const { auth } = this.context.firebase;
        this.stopAuthListener = auth().onAuthStateChanged(user => {
            if (user) {
                this.signIn(user);
            } else {
                this.signOut();
            }
        });
    }

    componentWillUnmount() {
        this.stopAuthListener();
    }

    handleSignIn = provider => {
        const { auth } = this.context.firebase;

        switch (provider) {
            case 'google':
                return auth()
                    .signInWithPopup(new auth.GoogleAuthProvider())
                    .cath(error => {
                        console.log(error);
                        // TODO: notify user of the error
                        return error;
                    });
            case 'anonymous':
                return auth()
                    .signInAnonymously()
                    .catch(error => {
                        console.log(error);
                        // TODO: notify user of the error
                        return error;
                    })
            default:
                const reason = "invalid provider passed to signIn method"
                console.log(reason);
                return Promise.reject(reason);
        }
    };

    handleSignOut = () => {
        const { auth } = this.context.firebase;
        console.log('sign out');
        return auth().signOut()
    }

    signIn(user) {
        const { uid, isAnonymous } = user;

        this.setState({
            uid,
            isAnonymous,
        });
    }

    signOut() {
        this.setState(INITIAL_STATE);
    }

    render() {
        const isAuthed = !!(this.state.uid && !this.state.isAnonymous);

        return this.props.children({
            ...this.state,
            signIn: this.handleSignIn,
            signOut: this.handleSignOut,
            isAuthed,
        })
    }
}

export default Auth;