import { Routes, Route, Navigate } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import { JournalRoutes } from "../journal/router/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useCheckAuth } from "../hooks/useCheckAuth"

export const AppRoutes = () => {

     const {status} = useCheckAuth();

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
