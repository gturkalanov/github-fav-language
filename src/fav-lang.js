const findFavLanguage = (repos) => {
    const languages = repos.map(repo => repo.language);
    const tempLanguageArray = {};

    for (let language of languages) {
        if (language) {
            tempLanguageArray[language] = (tempLanguageArray[language] || 0) + 1;
        }
    }
    console.log(tempLanguageArray)
    let maxCount = 0;
    let favoriteLanguageName = null;
    for (let language in tempLanguageArray) {
        if (tempLanguageArray[language] > maxCount) {
            maxCount = tempLanguageArray[language];
            favoriteLanguageName = language;
        }
    }

    return favoriteLanguageName;
};
  
module.exports = {
    findFavLanguage
};