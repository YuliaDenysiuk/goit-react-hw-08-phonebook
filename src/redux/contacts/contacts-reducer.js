import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import { filterContacts } from './contacts-actions';
import { fetchContacts, addContact, deleteContact } from './contacts-operations';

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, action) => {
        return action.payload
    },
    [addContact.fulfilled]: (state, action) => {
        if (state.find(el => el.name === action.payload.name)) {
            alert(`${action.payload.name} is already in contacts`)
            return;
        } else {
            return [action.payload, ...state];
        }
    },
    [deleteContact.fulfilled]: (state, {payload}) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {    
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
})

export default combineReducers({
    items,
    filter,
    loading,
});
