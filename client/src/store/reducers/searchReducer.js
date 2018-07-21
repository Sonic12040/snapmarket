import { Types } from "mongoose";


const initialState = {query: "", results: []};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case "HANDLE_SEARCH":
            return {
                ...state,
                query: action.payload.query,
                results: action.payload.results
            }
        default: 
            return state;
    }

};

export default reducer;
