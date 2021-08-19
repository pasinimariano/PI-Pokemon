const axios = require('axios')

const fetchData = async (url) => {
    try {
        const response = await axios(url)
        return response
    } catch (error) {
        return { Error: error.response.status }
    }
};

module.exports = fetchData;