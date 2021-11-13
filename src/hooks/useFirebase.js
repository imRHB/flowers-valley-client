import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from 'firebase/auth';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerWithEmailPassword = (name, email, password, history) => {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                const newUser = { email, displayName: name };
                setUser(newUser);

                saveUser(email, name);

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                    })
                    .catch(error => {
                        setAuthError(error.message)
                    });

                history.replace('/');
                setAuthError('');
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    const loginWithEmailPassword = (email, password, location, history) => {
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
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

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user.email]);

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
        admin,
        authError,
        loading,
        registerWithEmailPassword,
        loginWithEmailPassword,
        saveUser,
        logout
    }
};

export default useFirebase;