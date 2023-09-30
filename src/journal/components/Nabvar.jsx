import { LogoutOutlined, MenuBookOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { startLogOut } from "../../store/auth/thunks"
import { useDispatch } from "react-redux"


export const Navbar = ({ drawerWith = 240 }) => {

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(startLogOut())
    }

    return (
        <AppBar position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWith}px)` },
                ml: { sm: `${drawerWith}px` }
            }}>

            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}>

                    <MenuBookOutlined />
                    
                </IconButton>

                <Grid
                    container
                    direction='row'
                    justifyContent='space-between'>

                    <Typography variant="h6" noWrap component='div'>JournalApp</Typography>

                    <IconButton color="error"
                    onClick={onLogout}>

                        <LogoutOutlined  />

                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}