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
            state.isSaving = true;
            state.notes = state.notes.map( note => {
                if(note.id === payload.id) {return payload}
                return note
            })
            state.messageSaved = `${payload.title} actualizado correctamente`;
        },
    }
});

export const {
    addEmtyNewNotes,
    setActionNotes,
    setNotes,
    setSaving,
    updateNotes,
    savingNote } = journalSlice.actions;