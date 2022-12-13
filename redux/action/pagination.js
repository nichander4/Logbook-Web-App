//PAGESIZE
export const setPageSize = (page) => {
  return {
    type: "SET_PAGESIZE",
    payload: page,
  };
};

export const resetPageSize = () => {
  return {
    type: "RESET_PAGESIZE",
  };
};

//PAGE
export const setPage = (page) => {
  return {
    type: "SET_PAGE",
    payload: page,
  };
};

export const resetPage = () => {
  return {
    type: "RESET_PAGE",
  };
};

//FILTER
export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    payload: filter,
  };
};

export const resetFilter = () => {
  return {
    type: "RESET_FILTER",
  };
};

//SEARCH

export const setSearch = (page) => {
  return {
    type: "SET_SEARCH",
    payload: page,
  };
};

export const resetSearch = () => {
  return {
    type: "RESET_SEARCH",
  };
};

//PAGECOUNT

export const setPageCount = (count) => {
    return {
      type: "SET_PAGECOUNT",
      payload: count,
    };
  };