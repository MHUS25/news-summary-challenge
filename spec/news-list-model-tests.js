function testNewsListStartsWithNoNewsArticles() {
  var newsList = new NewsList();
  assert.isTrue(newsList.getArticles().length === 0);
};
testNewsListStartsWithNoNewsArticles();

function testCanAddAndStoreNewsArticles() {
  var newsList = new NewsList();
  newsList.addArticle('Brexit', 'May facing pressure over Brexit');
  assert.isEqualTo(newsList.getArticles()[0].getHeadline(), 'Brexit');
  assert.isEqualTo(newsList.getArticles()[0].getBody(), 'May facing pressure over Brexit');
};
testCanAddAndStoreNewsArticles();

function testCreatesEachNewsArticleWithUniqueId() {
  var newsList = new NewsList();
  newsList.addArticle('Brexit', 'May facing pressure over Brexit');
  newsList.addArticle('Earthquake Today', 'Solomon Islands, Indonesia and Japan suffers HUGE quakes as 6.2 tremors');
  assert.isEqualTo(newsList.getArticles()[0].getId(), 0);
  assert.isEqualTo(newsList.getArticles()[1].getId(), 1);
};
testCreatesEachNewsArticleWithUniqueId()