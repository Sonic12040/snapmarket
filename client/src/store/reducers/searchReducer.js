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
    const nestedArray = Object.entries(userButton); //userButton is an object with key-value pairs for selected benefits - boolean
    const testArrayResult = []; //holds the keys from userButton where the value is true
    nestedArray.forEach(subArray => {
        if (subArray[1] === true) {
            testArrayResult.push(subArray[0]);
        }
    }); //logic to check for value and push key
    console.log('Test Array Result', testArrayResult); //console log check of the result
    filter.forEach(benefit => { //filter is an array of the benefits a market accepts
        if (testArrayResult.includes(benefit)) {
            console.log('Benefit passed: ', benefit);
            return true; //only one benefit has to match
        } else {
            console.log('checkFail: ', false);
        }
        return false;
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
