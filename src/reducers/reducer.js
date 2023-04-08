const initialState = {
  qwerty: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OK':
      return {
        qwerty: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
