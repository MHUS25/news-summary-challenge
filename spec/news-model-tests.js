function testNewsInstantiatedWithHeadline() {
  var news = new News('News Headline', 'News body', 0);
  assert.isEqualTo(news.getHeadline(), 'News Headline');
};

testNewsInstantiatedWithHeadline();

function testNewsInstantiatedWithBody() {
  var news = new News('News Headline', 'News body', 0);
  assert.isTrue(news.getBody() === 'News body');
};

testNewsInstantiatedWithBody();

function testNewsInstantiatedWithId() {
  var news = new News('News Headline', 'News body', 0);
  assert.isTrue(news.getId() === 0);
};

testNewsInstantiatedWithId();
