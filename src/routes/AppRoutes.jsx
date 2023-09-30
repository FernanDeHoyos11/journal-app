import { Routes, Route } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import { JournalRoutes } from "../journal/router/JournalRoutes"
import { useSelector } from "react-redux"
import { CheckingAuth } from "../ui/components/CheckingAuth"

export const AppRoutes = () => {

    const {status} = useSelector( state => state.auth)

    if(status === 'checking'){
        return  <CheckingAuth/>
    }

    return (
        <Routes>
            {/* Rutas de autenticación */}
            <Route path="/auth/*" element={<AuthRouter />} />

            {/* Rutas de la aplicación de diario */}
            <Route path="/*" element={<JournalRoutes />} />
        </Routes>
    )
}
