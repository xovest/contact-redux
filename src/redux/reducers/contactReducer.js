const initialState = [
  {
    id: 0,
    name: "Nataly",
    email: 'nt@gmail.com',
    number: 72223
  },
  {
    id: 1,
    name: "Adam",
    email: 'ad@gmail.com',
    number: 73333
  }
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      state = [...state, action.payload];
      return state;
    case 'UPDATE_CONTACT':
      const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
      state = updateState;
      return state;
    case 'DELETE_CONTACT':
      const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
      state = filterContacts;
      return state;
    default:
      return state;
  }
};

export default contactReducer;