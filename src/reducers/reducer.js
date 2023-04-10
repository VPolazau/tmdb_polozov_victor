const initialState = {
  type: '',
  filter: '',
  listObj: {},
  item: {},
  searchText: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TYPE':
      return {
        ...state,
        type: action.payload,
      };
    case 'UPDATE_LISTOBJ':
      return {
        ...state,
        listObj: action.payload,
      };
    case 'UPDATE_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
