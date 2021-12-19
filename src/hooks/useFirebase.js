import initializeFirebase from "../components/Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                saveUser(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')

            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(setIsLoading(false));;
    }

    const signWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');

                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')
            }).catch((error) => {
                setAuthError(error.message)
            })
            .finally(setIsLoading(false));;
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(setIsLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        authError,
        logOut,
        admin,
        isLoading,
        registerUser,
        signWithGoogle,
        loginUser
    }

}
export default useFirebase;