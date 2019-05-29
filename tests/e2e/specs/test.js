// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'List all Gifs on Homepage': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 3000)
      .assert.elementPresent('.content')
      .assert.containsText('h1', 'Tranding Gifs')
      .waitForElementVisible('.VueCarousel', 10000)
      .assert.elementCount('.VueCarousel a', 16);
  },
  'Get a Gif Page': (browser) => {
    browser
      .click('.VueCarousel a')
      .waitForElementVisible('.content', 15000)
      .assert.elementPresent('img')
      .end();
  },
};
