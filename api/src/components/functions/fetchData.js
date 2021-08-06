const axios = require('axios')

const fetchData = async (url) => {
    const response = await axios(url)

    return response
};

module.exports = fetchData;