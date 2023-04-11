const initialState = {
  type: 'films',
  filter: 'popular',
  listObj: {},
  searchText: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TYPE':
      return {
        ...state,
        type: action.payload,
      };
    case 'UPDATE_LIST_OBJ':
      return {
        ...state,
        listObj: action.payload,
        isLoading: false,
      };
    case 'UPDATE_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'UPDATE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
