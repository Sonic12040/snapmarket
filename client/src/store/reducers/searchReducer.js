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
    for (const key in userButton) {
        console.log('key', key);
        console.log('filter', filter);
        if (userButton[key] === true) {
            if (filter.includes(key) {
                console.log('returning true');
                return true;
            }
        }
    }
    console.log('returning false');
    return false;
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
