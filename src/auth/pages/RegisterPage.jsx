import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom"

export const RegisterPage = () => {

    return (
        <AuthLayout title="Crear cuenta">
            <form >

                <Grid container>

                <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Tu nombre"
                            fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="yourname@gmail.com"
                            fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth></TextField>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                <Google></Google>
                                <Typography sx={{ ml: 1 }}> Google </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{ mr: 1 }}> ¿Ya tienes cuenta? </Typography>
                        <Link component={RouterLink} color="inherit" to='/auth/login'>
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>

            </form>
        </AuthLayout>
    )
}