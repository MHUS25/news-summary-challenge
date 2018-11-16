function testNewsListViewStartsEmpty() {
  var newsList = new NewsList
  var newsListView = new NewsListView(newsList)
  assert.isEqualTo(newsListView.newsListHTML(), '<ul></ul>')
}
testNewsListViewStartsEmpty()

function testNewsListViewWithNotesAdded() {
  var newsList = new NewsList
  var newsListView = new NewsListView(newsList)
  newsList.addArticle('Brexit', 'May facing pressure over Brexit');
  newsList.addArticle('Earthquake Today', 'Solomon Islands, Indonesia and Japan suffers HUGE quakes as 6.2 tremors');
  assert.isEqualTo(newsListView.newsListHTML(), '<ul><li><div><a href="#news/0">Brexit</a></div></li><li><div><a href="#news/1">Earthquake Today</a></div></li></ul>')
}
testNewsListViewWithNotesAdded()