var mongoose = require('mongoose');
var schema = mongoose.Schema;

var save_news = new schema(
  {
    author:String,
    title:String,
    description:String,
    url:String,
    urlToImage:String,
    publishedAt:String,
    Comment:String
  }
)
var save_my_news = mongoose.model('saveNews',save_news);
module.exports = save_my_news;
