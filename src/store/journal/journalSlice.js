import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: null,
        notes: [],
        active: null,
    },
    reducers: {
        savingNote: (state) => {
            state.isSaving = true
        },
        addEmtyNewNotes: (state, {payload}) => {
            state.notes.push(payload)
            state.isSaving = false
        },
        setActionNotes: (state, action) => {
            state.active = action.payload
            state.messageSaved = ''
        },
        setNotes: (state, {payload}) => {
            state.notes = payload
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = ''
        },
        updateNotes: (state, {payload}) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if(note.id === payload.id) {return payload}
                return note
            })
            state.messageSaved = `${payload.title} actualizado correctamente`;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false
            state.messageSaved = ''
            state.notes = []
            state.active = null
        },
        setPhotosActiveNote: (state, {payload}) => {
            state.active.imageUrls = [...state.active.imageUrls, ...payload]
            state.isSaving = false
        },
        deleteNoteById: (state, {payload}) => {
            state.active = null;
            state.notes = state.notes.filter(note => note.id !== payload)
            
        }
    }
});

export const {
    addEmtyNewNotes,
    setActionNotes,
    setNotes,
    setSaving,
    updateNotes,
    savingNote,
    setPhotosActiveNote,
    clearNotesLogout,
    deleteNoteById } = journalSlice.actions;