import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"

const formData = {
    displayName: '',
    email: '',
    password: '',
}

const formValidation = {
    displayName:[ (event) => event.length >= 1, 'El nombre es obligatorio'],
    email:[ (event) => event.includes('@'), 'El correo debe tener un @'],
    password:[ (event) => event.length >= 6, 'La contraseña debe tener mas de 6 letras']
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const {status, errorMessage} = useSelector(state => state.auth)
    const isAuthenticated = useMemo(() => status === 'checking', [status]);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const {formState,
           displayName,
           email, 
           password, 
           onInputChange, 
           isFormValid,
           displayNameValid,
           emailValid,
           passwordValid } = useForm(formData, formValidation);

    console.log(displayNameValid)

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true)
        if(!isFormValid) return;
        dispatch(startCreatingUserWithEmailPassword(formState))
        console.log({formState})
    }

    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={onSubmit}>

                <Grid container>

                <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Tu nombre"
                            fullWidth
                            onChange={onInputChange}
                            name="displayName"
                            value={displayName}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}/>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="yourname@gmail.com"
                            fullWidth
                            onChange={onInputChange}
                            name="email"
                            value={email}
                            error={!!emailValid && formSubmitted}
                            helperText={email}/>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            onChange={onInputChange}
                            name="password"
                            value={password}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}/>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 1 }}>
                    <Grid 
                    item 
                    xs={12}
                    display={!!errorMessage ? '' : 'none'}
                     >
                            <Alert severity="error">
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid item xs={12} >
                            <Button type="submit" variant="contained" fullWidth disabled={isAuthenticated}>
                                Login
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