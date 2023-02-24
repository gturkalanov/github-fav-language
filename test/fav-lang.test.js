const { findFavLanguage } = require('../src/fav-lang')

describe('findFavLanguage', () => {
  it('should return the correct favorite language', () => {
    const repos = [
      { language: 'JavaScript' },
      { language: 'JavaScript' },
      { language: 'Ruby' },
      { language: 'Python' },
      { language: null },
    ];

    const result = findFavLanguage(repos);
    expect(result).toBe('JavaScript');
  });

  it('should return null if all languages are null', () => {
    const repos = [
      { language: null },
      { language: null },
    ];

    const result = findFavLanguage(repos);
    expect(result).toBe(null);
  });
});