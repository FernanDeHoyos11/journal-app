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
        },
        setNotes: (state, {payload}) => {
            state.notes = payload
        },
        setSaving: (state) => {

        },
        updateNotes: (state, action) => {

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