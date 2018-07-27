import { Types } from "mongoose";

const convertBenefitsToArray = (market) => {
    let benefitsArray = [];
    if (market.Wic) {
        benefitsArray.push("WIC");
    };
    if (market.WicCash) {
        benefitsArray.push("WICCash");
    };
    if (market.Snap) {
        benefitsArray.push("SNAP");
    };
    if (market.SFMNP) {
        benefitsArray.push("SFMNP");
    };

    return benefitsArray;
  }



const filterMarket = (userButton, filter) => {
    const array = Object.entries(userButton).map((key) => key[1]);
    // const array = Object.entries(userButton).map((key) => key[1] >-1); // for testing
return filter.some(key => key === array);
    // return filter.some(key => key === array); // original line, always returns false
        // return filter.every(key => key !== array); // test line, always returns true
}

const initialState = {query: "", results: [], benefitsArray: []};

const reducer = (state = initialState, action) => {
console.log(initialState);

    switch(action.type) {
        case "HANDLE_SEARCH":
            return {
                ...state,
                query: action.payload.query,
                results: action.payload.results,
                benefitsArray: convertBenefitsToArray(action.payload.results[0].Benefits),
                showResults: filterMarket(action.payload.results[0].Benefits, action.payload.filter),

            }

        default:
            return state;
    }

};

export default reducer;
