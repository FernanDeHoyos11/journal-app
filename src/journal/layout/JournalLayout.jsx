import { Box, Toolbar } from "@mui/material"
import { Navbar, SideBar } from "../components";
import { useState } from "react";

const drawerWith = 240;

export const JournalLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const toggleSidebar = () => {
      setIsSidebarOpen(true);
    };

    return (
        <Box sx={{ display: 'flex' }}>

            <Navbar drawerWidth={drawerWith} toggleSidebar={toggleSidebar} />
            <SideBar drawerWidth={drawerWith} open={isSidebarOpen}  />


            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}>

                <Toolbar></Toolbar>
                {children}

            </Box>
        </Box>
    )
}