import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

//create context
const UserAuthContext = createContext();

//provider component
export function UserAuthProvider({children}) {
    const [user, setUser] = useState({});

    async function signUp(email, password) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, 'users', email), {
                watchList: [],
            });
        } catch (error) {
            if (error.code === "auth/invalid-email") {
                alert("The email address is not valid.");
            } else {
                console.error("Error signing up:", error.message);
            }
        }
    }

    async function signIn(email, password) {
        await signInWithEmailAndPassword(auth, email, password);
    }

    async function logOut() {
        await signOut(auth);
    }

    useEffect(() => {
        function unsubscribe() {
            onAuthStateChanged(auth , (currentUser) => {
                setUser(currentUser)
            })
        }
        unsubscribe();
    } ,[])

    return (
        <UserAuthContext.Provider value={{signIn, signUp , logOut , user}}>
            {children}
        </UserAuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserAuthContext);
}