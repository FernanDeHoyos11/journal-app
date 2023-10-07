import { useMemo } from "react"
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"
import { useDispatch, useSelector } from "react-redux"

const newForm = {
    email: '',
    password: '',
}

export const LoginPage = () => {

    const dispatch = useDispatch();

    const {status, errorMessage,  } = useSelector(state => state.auth)
    const isAuthenticated = useMemo(() => status === 'checking', [status]);

    const {email, password, onInputChange, formState} = useForm(newForm);

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log({email, password})
        dispatch(checkingAuthentication())
        dispatch(startLoginWithEmailPassword(formState))
    }

    const onSingInGoogle = () =>{
        console.log('google')
        dispatch(startGoogleSignIn())

    }

    return (

        <AuthLayout title="Login">
            <form onSubmit={onSubmit} >

                <Grid container>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="yourname@gmail.com"
                            fullWidth
                            onChange={onInputChange}
                            name="email"
                            value={email}></TextField>
                    </Grid>
                    <Grid item xs={12}  sx={{ mb: 2 }} >
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            onChange={onInputChange}
                            name="password"
                            value={password}></TextField>
                    </Grid>

                    

                    <Grid container spacing={2} sx={{ mb: 1 }} >
                    <Grid 
                     item
                     xs={12}
                     display={!!errorMessage ? '' : 'none'} >
                            <Alert severity="error" >{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12} sm={ 6 } >
                            <Button disabled={isAuthenticated} type="submit" variant="contained" fullWidth >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={ 6 } >
                            <Button disabled={isAuthenticated} onClick={onSingInGoogle} variant="contained" fullWidth>
                                <Google></Google>
                                <Typography sx={{ ml: 1 }}> Google </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color="inherit" to='/auth/register'>
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>

            </form>
        </AuthLayout>

    )
}