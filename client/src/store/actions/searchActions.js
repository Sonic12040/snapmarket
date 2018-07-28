export const handleSearch = (query) => dispatch => {

const {
    filter,
}
= query

    fetch('/api/market/handlesearch', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query), // body data type must match "Content-Type" header
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



// // fetch call for all markets

//           fetch('/api/market/allmarkets', {
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(query), // body data type must match "Content-Type" header
//         })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             const payload = {
//                 results: data,
//                 query: query,
//                 filter,
//             }
//             dispatch({
//                 type: "HANDLE_SEARCH",
//                 payload: payload
//             });
//         })
//         .catch(err => {
//             console.log("error in handle search", err);
//         })





}


export const handleMarketClick = Address => {

    return {

        type: "TARGET_MARKET",
        payload: Address

    }

}


