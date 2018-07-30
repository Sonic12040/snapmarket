// Action for the Zip Code Search
export const handleSearch = (query) => dispatch => {
    const {filter,} = query
    fetch('/api/market/handlesearch', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query),
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const payload = {
            results: data,
            query: query,
            filter,
        }
        dispatch({
            type: "HANDLE_SEARCH",
            payload: payload
        });
    })
    .catch(err => {
        console.log("error in handle search", err);
    })
}
// Handles clicking a Market on the Map for zip codes with more than one market.
export const handleMarketClick = Address => {
    return {
        type: "TARGET_MARKET",
        payload: Address
    }
}
