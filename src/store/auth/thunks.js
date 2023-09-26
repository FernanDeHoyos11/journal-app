import { SignInWithGoogle } from "../../firebase/provider"
import { checkingCredentials } from "./authSlice"



export const checkingAuthentication = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await SignInWithGoogle()
        console.log({result})

    }
}


