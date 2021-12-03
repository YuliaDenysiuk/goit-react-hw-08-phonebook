import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('auth/register',
    async (user, { rejectWithValue }) => {
        try {           
            const { data } = await axios.post('/users/signup', user);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const logIn = createAsyncThunk('auth/login',
    async (user, { rejectWithValue }) => {
        try {           
            const { data } = await axios.post('/users/login', user);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        } 
    },
);

export const logOut = createAsyncThunk('auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const fetchCurrentUser = createAsyncThunk('auth/refresh',
    async (_, { getState, rejectWithValue }) => {
        const state = getState();
        const currentToken = state.auth.token;

        if (currentToken === null) {
            return rejectWithValue();
        }

        token.set(currentToken);

        try {
            const {data} = await axios.get('/users/current');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

