import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addEmtyNewNotes, savingNote, setActionNotes, setNotes } from "./journalSlice";
import { startLoad } from "../../helpers";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        
        const {uid} = getState().auth;

        dispatch(savingNote())

        console.log(uid)

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote)
        newNote.id = newDoc.id;
        dispatch(addEmtyNewNotes(newNote))
        dispatch(setActionNotes(newNote))
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        if(!uid) throw new Error('El UID no existe')
        const notes = await startLoad(uid)
    dispatch(setNotes(notes))
    }
}