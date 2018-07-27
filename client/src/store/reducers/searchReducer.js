import { Types } from "mongoose";

const convertBenefitsToArray = (market) => {
    let benefitsArray = [];
    if (market.Wic) {
        benefitsArray.push("WIC");
    };
    if (market.WicCash) {
        benefitsArray.push("WIC CASH");
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
<<<<<<< HEAD
    const array = Object.entries(userButton).map((key) => key[1]);
    // const array = Object.entries(userButton).map((key) => key[1] >-1); // for testing
// return filter.some(key => key === array);

console.log("searchreducer console log of object entries", Object.entries);

return filter.includes(key => key === array);
    // return filter.some(key => key === array); // original line, always returns false
        // return filter.every(key => key !== array); // test line, always returns true
=======
    for (const key in userButton) {
        if (userButton[key] === true) {
            if (filter.includes(key)) {
                return true;
            }
        }
    }
    return false;
>>>>>>> f4194b41203f48eea41fb74efae8f354be3730c1
}

const initialState = {query: "", results: [], benefitsArray: []};

const reducer = (state = initialState, action) => {
console.log('Initial State', initialState);

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
