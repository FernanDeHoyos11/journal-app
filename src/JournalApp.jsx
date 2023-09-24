import { AppRoutes } from "./routes/AppRoutes"
import { AppTheme } from "./themes"

export const JournalApp = () => {
    return(
        <>
        <AppTheme>
           <AppRoutes/>
        </AppTheme>
        </>
    )
}