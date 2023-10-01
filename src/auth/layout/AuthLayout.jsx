import { Grid, Typography } from "@mui/material"


export const AuthLayout = ({ children, title = '' }) => {

    return (
        <Grid
            className="animate__animated animate__pulse"
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>


            <Grid item
                boxShadow={'0px 5px 5px rgba(0, 0, 0, 0.2)'}
                xs={3}
                sx={{ width:{sm: 450}, background: 'white', padding: 3, borderRadius: 2 }} >
                <Typography variant="h5" sx={{ mb: 1 }}>
                    {title}
                </Typography>

                {children}
            </Grid>
        </Grid>
    )
}