const GET_GREETING = 'GET_GET_GREETING';
const initialState = [];
// const API = '';

export const getGreeting = (payload) => ({
  type: GET_GREETING,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
