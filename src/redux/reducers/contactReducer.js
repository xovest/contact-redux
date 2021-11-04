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
    default:
      return state;
  }
};

export default contactReducer;