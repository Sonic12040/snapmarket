// Function to convert Benefits object to Array
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
// Filter to check for matching markets
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
// Initial State
const initialState = {query: "", results: [], benefitsArray: [], targetedMarket: null};
// Reducer and its switch cases
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
            const target = state.results.filter(item => {
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

            };
        default:
            return state;
    }

};
// Exports
export default reducer;
