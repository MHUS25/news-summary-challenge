(function(exports) {
  function SingleNewsView(news) {
    this.news = news
  }
  SingleNewsView.prototype.viewNews = function(note) {
    return `<div>${this.news.headline}: ${this.news.body}</div>`
  }
  exports.SingleNewsView = SingleNewsView
})(this)
