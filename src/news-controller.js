(function(exports) {
  function NewsController(newsList) {
    this.newsList = newsList;
    this.newsListView = new NewsListView(this.newsList)
  }

  NewsController.prototype.insertHTML = function() {
    var html = this.newsListView.newsListHTML();
    document.getElementById('app').innerHTML = html;
  };

  exports.NewsController = NewsController
})(this)
