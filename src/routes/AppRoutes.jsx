import { Routes, Route } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import { JournalRoutes } from "../journal/router/JournalRoutes"

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas de autenticación */}
            <Route path="/auth/*" element={<AuthRouter />} />

            {/* Rutas de la aplicación de diario */}
            <Route path="/*" element={<JournalRoutes />} />
        </Routes>
    )
}
