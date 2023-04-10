const updateListObj = (newListObj) => {
  return {
    type: 'UPDATE_LISTOBJ',
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


export { updateListObj, updateFilter, updateType };
