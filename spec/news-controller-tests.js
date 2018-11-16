function testNewsControllerCanBeInstantiated() {
  var newsController = new NewsController(new NewsList);
  assert.isInstanceOf(newsController, NewsController);
}
testNewsControllerCanBeInstantiated()

function testInnerHTMLPropertyCanBeChanged() {
  newsList = new NewsList
  var newsController = new NewsController(newsList);
  var div = document.createElement('div');
  div.id = 'app';
  document.body.appendChild(div);
  newsList.addArticle('Brexit', 'PM close to closing Brexit deal');
  newsController.insertHTML();
  assert.isEqualTo(div.innerHTML, '<ul><li><div><a href="#news/0">Brexit</a></div></li></ul>');
}
testInnerHTMLPropertyCanBeChanged()
