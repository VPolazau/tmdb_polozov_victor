const upadatelistObj = (newListObj) => {
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

const updatePage = (newPage) => {
  return { 
    type: 'UPDATE_PAGE', 
    payload: newPage 
  };
};

const updateType = (newType) => {
  return { 
    type: 'UPDATE_TYPE', 
    payload: newType 
  };
};


export { upadatelistObj, updateFilter, updatePage, updateType };
