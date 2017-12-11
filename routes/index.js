//@@author LuLechuan
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
  Article.getArticles(function(err, articles){
    res.render('index', {
      title: 'Index',
      articles: articles
    }, 4);
  });
});

module.exports = router;
