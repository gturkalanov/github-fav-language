const axios = require('axios');

const getReposForUser = async (githubBaseUrl,username) => {

    const url = `${githubBaseUrl}/users/${username}/repos`;

    const response = await axios.get(url);

    if (response.status != 200) {
        throw new Error(`Not able to fetch Github repositories for ${username}`);
    }

    return response.data;
};

module.exports = {
    getReposForUser
};