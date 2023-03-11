import {configureStore, createSlice} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const myContactsReducerSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      const contactId = nanoid();
      return [
        ...state,
        {
          id: contactId,
          name: action.payload.name,
          number: action.payload.number,
        },
      ];
    },
    removeContact(state, action) {
      return state.filter(state => state.id !== action.payload);
    }
  },
});

export const { addContact, removeContact } = myContactsReducerSlice.actions;

// export const addContact = createAction(
//   'myData/addFormValues',
//   (name, number) => {
//     const contactId = nanoid();
//     return {
//       payload: {
//         id: contactId,
//         name,
//         number,
//       },
//     };
//   }
// );

// export const removeContact = createAction('myData/removeContact');

// const myContactsReducer = createReducer([], {
//   [addContact]: (state, action) => {
//     return [
//       ...state,
//       {
//         id: action.payload.id,
//         name: action.payload.name,
//         number: action.payload.number,
//       },
//     ];
//   },
//   [removeContact]: (state, action) =>
//     state.filter(state => state.id !== action.payload),
// });

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

// export const filter = createAction('myData/filter', value => {
//   return {
//     payload: {
//       value,
//     },
//   };
// });

// const myFilter = createReducer('', {
//   [filter]: (state, action) => {
//     return action.payload.value;
//   },
// });

export const store = configureStore({
  reducer: {
    contacts: myContactsReducerSlice.reducer,
    filter: myFilterSlice.reducer,
  },
});
