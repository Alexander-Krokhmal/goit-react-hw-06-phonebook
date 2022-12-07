// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, setFilter } from "./actions";

// const initialContactsState = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ];

// const initialFilterState = '';
  
//--------Before------------------------
// export const contactsReducer = (state = initialContactsState, action) => {
//     switch (action.type) {
//         case addContact.type:
//             return [...state, action.payload];
//         case deleteContact.type:
//             return state.contacts.filter(contact => contact.id !== action.payload);
//         default:
//             return state;
//     }
// };


// export const filterReducer = (state = initialFilterState, action) => {
//     return {
//         ...state,
//         filter: action.payload,
//     };
// }

// //=============== After ========================
// export const contactsReducer = createReducer(initialContactsState, {
//     [addContact]: (state, action) => {
//         return [...state, action.payload];
//     },
    
//     [deleteContact]: (state, action) => {
//     return state.contacts.filter(contact => contact.id !== action.payload);
//     },
    
// });


// export const filterReducer = createReducer(initialFilterState, {
//     [setFilter]: (state, action) => {
//         return {
//             ...state,
//             filter: action.payload,
//         };
//     },
// });