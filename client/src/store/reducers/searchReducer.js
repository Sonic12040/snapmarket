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
    const nestedArray = Object.entries(userButton);
    const testArrayResult = [];
    nestedArray.forEach(subArray => {
        if (subArray[1] === true) {
            testArrayResult.push(subArray[0]);
        }
    });
    console.log('Test Array Result', testArrayResult);
    filter.forEach(benefit => {
        if (testArrayResult.includes(benefit)) {
            return true;
        } else {
            console.log('checkFail', false);
        }
    });
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
