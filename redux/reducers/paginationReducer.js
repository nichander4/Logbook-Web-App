const initialState = {
  pagination: true,
  page: 1,
  pageSize: 5,
  filter: "",
  search: "",
  pageCount: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGESIZE":
      return {
        ...state,
        pageSize: action.payload,
        page: 1,
      };
    case "RESET_PAGESIZE":
      return {
        ...state,
        pageSize: 5,
        page: 1,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "RESET_PAGE":
      return {
        ...state,
        page: 1,
      };
    case "SET_PAGECOUNT":
      return {
        ...state,
        pageCount: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "RESET_FILTER":
      return {
        ...state,
        filter: "",
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
        page: 1,
      };
    case "RESET_SEARCH":
      return {
        ...state,
        search: "",
      };
    default:
      return state;
  }
};

export default reducer;
