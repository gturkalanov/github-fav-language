const readline = require('readline');
const { getReposForUser } = require('./github-api');
const { findFavLanguage } = require('./fav-lang');
const { GITHUB_API_URL} = require('../config/config');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const main = async () => {
    rl.question('Enter a Github username: ', async (githubUsername) => {
        try {
            const repos = await getReposForUser(GITHUB_API_URL, githubUsername);
            const favLanguage = findFavLanguage(repos);
            console.log(`The favorite language of ${githubUsername} is ${favLanguage}`);
            rl.close();
        } catch (error) {
            console.error(error.message);
            rl.close();
        }
    });
};

main();