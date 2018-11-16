(function(exports) {
  function NewsController(newsList) {
    this.newsList = newsList;
    this.newsListView = new NewsListView(this.newsList)
  }

  NewsController.prototype.insertHTML = function() {
    var html = this.newsListView.newsListHTML();
    document.getElementById('app').innerHTML = html;
  };

  NewsController.prototype.makeUrlChangeShowNewsForCurrentPage = function() {
    var boundShowNewsForCurrentPage = this._showNewsForCurrentPage.bind(this)
    window.addEventListener("hashchange", boundShowNewsForCurrentPage);
  };

  NewsController.prototype._showNewsForCurrentPage = function() {
    var newsId = this._getNewsIdFromUrl(window.location);
    var news = this._findNewsById(newsId)
    this._showNews(news);
  };

  NewsController.prototype._getNewsIdFromUrl = function(location) {
    return location.hash.split("#news/")[1];
  };

  NewsController.prototype._showNews = function(news) {
    var singleNewsView = new SingleNewsView(news)
    var div = document.getElementById('app');
    div.innerHTML = singleNewsView.viewNews();
  };

  NewsController.prototype._findNewsById = function(id) {
    return this.newsList.getArticles().find(function(news) {
      return String(news.id) === id;
    })
  };

  exports.NewsController = NewsController
})(this)
