import { createSlice } from '@reduxjs/toolkit';
import {register} from '../../redux/auth/auth-operations';

const initialState = {
    user: {name: null, email: null, password: null},
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            // state.token = action.payload.token;
            state.isLoggedIn = true;
        },
    },
});

export default authSlice.reducer;