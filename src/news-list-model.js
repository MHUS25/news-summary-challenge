(function(exports) {
  function NewsList() {
    this.articles = [];
  };
   NewsList.prototype.getArticles = function() {
    return this.articles;
  };
   NewsList.prototype.addArticle = function(headline, body) {
    news = new News(headline, body, this._nextID());
    this.articles.push(news);
  };
   NewsList.prototype._nextID = function() {
    return this.articles.length;
  };
   exports.NewsList = NewsList;
})(this);
