function testSingleNewsViewHasAnArticle() {
  var news = new News
  var singleNewsView = new SingleNewsView(news);
  assert.isEqualTo(singleNewsView.news, news);
};
 testSingleNewsViewHasAnArticle();

 function testCanViewNewsInHTML() {
  var news = new News('Arsenal Champions', 'Arsenal win Premier League')
  var singleNewsView = new SingleNewsView(news);
  assert.isEqualTo(singleNewsView.viewNews(), '<div>Arsenal Champions: Arsenal win Premier League</div>');
};
 testCanViewNewsInHTML();
