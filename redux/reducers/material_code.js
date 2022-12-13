const initialState = {
  data: [],
  error: "",
  token: null,
};

const reducer = (action) => {
  switch (action.type) {
    case "FETCH_ALLDATA":
      return {
        data: action.payload,
        error: "",
      };

    case "FETCH_DATABYID":
      return action.payload;

    case "ADD_DATA":
      return action.payload;

    case "FETCH_UPDATEDATA":
      return action.payload;

    case "FETCH_DELETEDATA":
      return action.payload;
  }
};

export default reducer;
