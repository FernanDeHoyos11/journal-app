import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"
import { useState } from "react"

export const SideBar = ({ drawerWidth = 240, open }) => {

    const {displayName} = useSelector(state => state.auth)
    const {notes} = useSelector(state => state.journal)
     

    

    return (
        <Box component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>

<Drawer
        variant="permanent"
        open={open}
        sx={{
          display: { xs: "block", sm: "block" }, // Muestra el sidebar en pantallas grandes
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            // Aplica la clase 'sidebar-hidden' para ocultar en dispositivos móviles
            "@media (max-width: 600px)": {
              display: "none",
            },
          },
        }}
      >
        <Toolbar>
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
        </Box>
    )
}
