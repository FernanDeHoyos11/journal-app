import { createSlice } from '@reduxjs/toolkit';

export const autchSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'no-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
     },
    reducers: {
        login: (state,  action  ) => {
            
        },
        logout: (state, payload) => {

        },
        checkingCredentials: (state) =>{
           state.status = 'cheking'
        },

}
});

export const { login, logout, checkingCredentials} = autchSlice.actions;