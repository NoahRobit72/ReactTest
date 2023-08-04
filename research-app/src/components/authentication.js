import { useState } from "react";
import {auth, googleProvider} from "../firebase_setup/firebase";
import {createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'


export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        //regular sign in with email and password 
        const signUp = async () => {
            try {
            await createUserWithEmailAndPassword(auth, email, password);
            } catch (err) {
                console.error(err)
            }
     };
     //sign in with google 
     const signInWithGoogle = async () => {
        try {
        await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err)
        }
 };

 /*
    //logout functionality
    const logout = async () => {
        try {
        await signOut(auth);
        } catch (err) {
            console.error(err)
        }
};
*/

    return (
        <div> 
            <input placeholder="Email..." 
            onChange={(e) => setEmail(e.target.value)} 
            />
            <input placeholder="Password..." 
            type = "password"
            onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={signUp}> Sign Up</button>

            <button onClick = {signInWithGoogle}> Sign In With Google </button>

            {/* <button onClick={logout}> Logout  </button> */}
        </div>
    );
};