import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register',
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const user = {
                name,
                email,
                password,
            };
            const { data } = await axios.post('/users/signup', user);
            return data;
        } catch (error) {
            return rejectWithValue(error);
    } 
    });

