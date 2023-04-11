const updateListObj = (newListObj) => {
  return {
    type: 'UPDATE_LIST_OBJ',
    payload: newListObj,
  };
};

const updateFilter = (newFilter) => {
  return { 
    type: 'UPDATE_FILTER', 
    payload: newFilter 
  };
};

const updateType = (newType) => {
  return { 
    type: 'UPDATE_TYPE', 
    payload: newType 
  };
};

const updateSearchText = (text) => {
  return { 
    type: 'UPDATE_SEARCH_TEXT', 
    payload: text 
  };
};

const loadingOn = () => {
  return {
    type: 'LOADING_ON'
  }
}

export { updateListObj, updateFilter, updateType, updateSearchText, loadingOn };
