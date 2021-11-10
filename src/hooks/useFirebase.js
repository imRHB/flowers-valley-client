import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const registerWithEmailPassword = (email, password) => {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setAuthError('');
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    const loginWithEmailPassword = (email, password) => {
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setAuthError('');
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setAuthError('');
            }
            else {
                setUser({});
            }
            setLoading(false);
        })

        return () => unsubscribed;
    }, [auth]);

    const logout = () => {
        setLoading(true);

        signOut(auth)
            .then(() => {
                setAuthError('');
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return {
        user,
        authError,
        loading,
        registerWithEmailPassword,
        loginWithEmailPassword,
        logout
    }
};

export default useFirebase;