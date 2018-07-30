export default {
    getAllMarkets: function() {
        return fetch('/api/market/getallmarkets')
            .then(function(res) {
                return res.json();
          })
    },
}
