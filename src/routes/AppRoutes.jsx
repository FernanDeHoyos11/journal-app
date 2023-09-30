import { Routes, Route, Navigate } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import { JournalRoutes } from "../journal/router/JournalRoutes"
import { useDispatch, useSelector } from "react-redux"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"

export const AppRoutes = () => {

    const {status} = useSelector( state => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if(!user) return dispatch(logout())
            const {uid, email, displayName, photoURL} = user;
            dispatch(login({uid, email, displayName, photoURL}))
        })
    }, [])

    if(status === 'checking'){
        return  <CheckingAuth/>
    }

    return (
        <Routes>
            { (status === 'authenticated')
               ? <Route path="/*" element={<JournalRoutes />} />
               :  <Route path="/auth/*" element={<AuthRouter />} /> }  

              <Route path="/*" element={<Navigate to='/auth/login' />} />     
        </Routes>
    )
}
