(function(exports) {
  function NewsListView(newsList) {
    this.newsList = newsList
  }

  NewsListView.prototype.newsListHTML = function() {
    list = this.newsList.getArticles().map(
      news => `<li><div><a href="#news/${news.getId()}">${news.getHeadline()}</a></div></li>`
    ).join('')
    return `<ul>${list}</ul>`
  }

  exports.NewsListView = NewsListView
})(this)
