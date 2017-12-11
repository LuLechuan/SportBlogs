//@@author LuLechuan
const express = require('express');
const router = express.Router();

Category = require('../models/Category.js');
Article = require('../models/Article.js');

router.get('/articles', function(req, res, next){
  Article.getArticles(function(err, articles){
    if (err) {
      res.send(err);
    }
    res.render('manage_articles', {
     title: 'Manage Articles',
     articles: articles
    });
  });
});

router.get('/categories', function(req, res, next){
  Category.getCategories(function(err, categories){
    if (err) { res.send(err); }

    res.render('manage_categories', {
      title: 'Categories',
      categories: categories
    });
  });
});

router.get('/articles/add', function(req, res, next){
  Category.getCategories(function(err, categories){
    if (err) {
      res.send(err);
    }
    res.render('add_article',
    {title: 'Create Article',
    categories: categories});
  });
});

router.get('/categories/add', function(req, res, next){
  res.render('add_category', {title: 'Create Category'});
});

// Edit Category Page - GET
router.get('/categories/edit/:id', function(req, res, next){
  Category.getCategoryById(req.params.id, function(err, category){
    if (err) {
      res.send(err);
    }
    res.render('edit_category', {
       title: 'Edit Category',
       category: category
    });
  });
});

// Edit Article Page - GET
router.get('/articles/edit/:id', function(req, res, next){
  Article.getArticleById(req.params.id, function(err, article){
    if (err) {
      res.send(err);
    }
    Category.getCategories(function(err, categories){
      res.render('edit_article', {
         title: 'Edit Article',
         article: article,
         categories: categories
      });
    });
  });
});

module.exports = router;
