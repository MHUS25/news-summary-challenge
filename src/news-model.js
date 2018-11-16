(function(exports) {
  function News(headline, body, id) {
    this.headline = headline;
    this.body = body
    this.id = id;
  };

  News.prototype.getHeadline = function() {
    return this.headline
  };

  News.prototype.getBody = function() {
    return this.body
  };

  News.prototype.getId = function() {
    return this.id
  };

  exports.News = News;
})(this);