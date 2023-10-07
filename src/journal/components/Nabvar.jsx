import { ChevronLeftOutlined, LogoutOutlined, MenuBookOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { startLogOut } from "../../store/auth/thunks"
import { useDispatch } from "react-redux"
import { useState } from "react"


export const Navbar = ({ drawerWidth = 240, toggleSidebar }) => {


    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(startLogOut())
    }

    return (
        <AppBar position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}>

            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={toggleSidebar}
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid
                    container
                    direction='row'
                    justifyContent='space-between'>

                    <Typography variant="h6" noWrap component='div'>JournalApp</Typography>

                    <IconButton color="error"
                        onClick={onLogout}>

                        <LogoutOutlined />

                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}