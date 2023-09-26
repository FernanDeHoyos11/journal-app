import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const GoogleProvider = new GoogleAuthProvider();

export const SignInWithGoogle = async()  => {

    try {

        const result = await signInWithPopup(FirebaseAuth, GoogleProvider);

        const {displayName, email, photoURL, uid} = result.user

        return {
            ok: true,
            displayName,
            email, 
            photoURL,
            uid
        }

    } catch(error){
        const errorCode = error.errorCode
        const errorMessage = error.message
        return{
            ok: false,
            errorCode,
            errorMessage
        }
    }

    
}