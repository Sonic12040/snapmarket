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
        if (userButton[key] === true) {
            if (filter.includes(key)) {
                return true;
            }
        }
    }
    return false;
}

const initialState = {query: "", results: [], benefitsArray: [], targetedMarket: null};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case "HANDLE_SEARCH":
            return {
                ...state,
                query: action.payload.query,
                results: action.payload.results,
                benefitsArray: convertBenefitsToArray(action.payload.results[0].Benefits),
                showResults: filterMarket(action.payload.results[0].Benefits, action.payload.filter),

            };
        case "TARGET_MARKET":
            // work thru results array to find whatever the market is with the matching address
            //find the object in the results array that has the same Address as the payload. if statement to return null?
            const target = state.results.filter(item => {
                // match item.Address to action.payload
                if (item.Address === action.payload) {
                    console.log('ITEM', item);
                    return item;
                } else {
                    return null;
                }
            });
            return {
                ...state,
                targetedMarket: target

            }

        default:
            return state;
    }

};

export default reducer;
