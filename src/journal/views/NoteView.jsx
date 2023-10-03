import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "./ImageGallery"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useEffect, useMemo } from "react"
import { setActionNotes, setNotes, startSaveNote } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2'



export const NoteView = () => {
    const dispatch = useDispatch();
    const {active:note,  messageSaved, isSaving} = useSelector(state => state.journal)
    const {formState, onInputChange, title, body, date} = useForm(note)
    

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long', 
          day: 'numeric'
        };
        return newDate.toLocaleDateString(undefined, options);
      }, [date]);
      
      useEffect(() => {
         dispatch(setActionNotes(formState))
      }, [formState])

      useEffect(() => {
        if(messageSaved.length > 0){
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }
     }, [messageSaved])

      const onSaveNote = () => {
        dispatch(startSaveNote())
      }

    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            sx={{ mb: 1 }}>

            <Grid item>
                <Typography fontSize={38} fontWeight='light' > {dateString} </Typography>
            </Grid>

            <Grid item>
                <Button 
                color="primary"
                sx={{ padding: 2 }}
                onClick={onSaveNote}
                disabled={!isSaving}>
                    Guardar <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    name="title"
                    value={title}
                    onChange={onInputChange}
                    sx={{ border: 'none', mb: 1 }} />

                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    name="body"
                    value={body}
                    onChange={onInputChange}
                    placeholder="¿Que sucedio hoy?"
                    minRows={5} />
            </Grid>

            <ImageGallery/>

        </Grid>
    )
}
