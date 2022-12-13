
const initialState = { 
    data: [],
    error: "",
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "STORE_DATA":
            return{
                ...state,
                data: action.payload,
                error: "",
            }
        case "ERROR_DATA":
            return{
                ...state,
                error: action.payload,
                data: []
            }
        case "LOADING_DATA":
            return{
                ...state,
                loading: action.payload,
            }
        default: return state
    }
}

export default reducer;