import API from '../../utils/API.js';

export const handleSearch = (query) => dispatch => {
    console.log("search actions")
    fetch(API.handleSearch, {
        method: "POST",  
        headers: {
            'Content-Type': 'application/json'
        },      
        body: JSON.stringify(query), // body data type must match "Content-Type" header
    }).then(res => {
        const payload = {
            results: res.data,
            query: query,
        }
        dispatch({

            type: "HANDLE_SEARCH",
            payload: payload

        });
    })
    .catch(err => {
        console.log("error in handle search");
    }) 

}