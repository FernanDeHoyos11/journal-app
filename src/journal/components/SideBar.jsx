import { ChevronLeftOutlined, MenuOutlined, TurnLeftOutlined, TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"
import { useState } from "react"

export const SideBar = ({ drawerWidth = 240, ontoggleSidebar, isSidebarOpen }) => {

    const { displayName } = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)

   


    return (

        <Toolbar>
            
            <Drawer
                variant="permanent"
                open={isSidebarOpen}
                sx={{
                    display: { xs: isSidebarOpen ? 'block' : 'none', sm: 'block' },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                <Toolbar>
                <IconButton
                color="inherit"
                edge="start"
                onClick={ontoggleSidebar}
                sx={{ mr: 2, display: { sm: 'none' } }}>

                <ChevronLeftOutlined />

            </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {notes.map((note) => (
                        <SideBarItem key={note.id} {...note} />
                    ))}
                </List>
            </Drawer>
        </Toolbar>

    )
}
