import { Box, Toolbar } from "@mui/material"
import { Navbar, SideBar } from "../components";
import { useState } from "react";

const drawerWith = 240;

export const JournalLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    
    const ontoggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

 

    return (
        <Box sx={{ display: 'flex' }}>

            <Navbar drawerWidth={drawerWith} open={ontoggleSidebar} />
            <SideBar drawerWidth={drawerWith} ontoggleSidebar={ontoggleSidebar} isSidebarOpen={isSidebarOpen}  />


            <Box
                component='main'
                sx={{ flexGrow: 1, paddingRight: 4, pt: 3, pb: 3}}>

                <Toolbar></Toolbar>
                {children}

            </Box>
        </Box>
    )
}