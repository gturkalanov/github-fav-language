const axios = require('axios');
const { getReposForUser } = require('../src/github-api');

jest.mock('axios');

describe('getReposForUser', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const githubBaseUrl = 'https://api.github.com';
    const username = 'fake.username';
    const url = `${githubBaseUrl}/users/${username}/repos`;
    const expectedResponse = [{ name: 'repo1' }, { name: 'repo2' }];

    it('should return the repositories for a valid user', async () => {
        axios.get.mockResolvedValueOnce({ status: 200, data: expectedResponse });
        const repos = await getReposForUser(githubBaseUrl, username);
        expect(repos).toEqual(expectedResponse);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    it('should throw an error for an invalid user', async () => {
        axios.get.mockResolvedValueOnce({ status: 404 });
        await expect(getReposForUser(githubBaseUrl, username)).rejects.toThrow(
            `Not able to fetch Github repositories for ${username}`
        );
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(url);
    });
});