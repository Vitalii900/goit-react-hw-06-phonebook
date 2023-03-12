import {configureStore, createSlice} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const myContactsReducerSlice = createSlice({
  name: 'contacts',
  initialState: {array: []},
  reducers: {
    addContact(state, action) {
      // console.log(state);
      const contactId = nanoid();
      return {array: [
        ...state.array,
        {
          id: contactId,
          name: action.payload.name,
          number: action.payload.number,
        },
      ]}
    },
    removeContact(state, action) { return { array: [state.array.filter(state => state.id !== action.payload)]}}
  },
});

export const { addContact, removeContact } = myContactsReducerSlice.actions;

const myFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(state, action) {
      return action.payload;
    },
  },
});

export const { filter } = myFilterSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  myContactsReducerSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: myFilterSlice.reducer,
  },
});

export const persistor = persistStore(store);
