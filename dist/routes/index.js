'use strict';

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/users', function (req, res) {
  _index2.default.User.create({
    email: req.body.email
  }).then(function (user) {
    res.json(user);
  });
});

// get all todos
router.get('/todos', function (req, res) {
  _index2.default.Todo.findAll({}).then(function (todos) {
    res.json(todos);
  });
});

// get single todo
router.get('/todo/:id', function (req, res) {
  _index2.default.Todo.find({
    where: {
      id: req.params.id
    }
  }).then(function (todo) {
    res.json(todo);
  });
});

// add new todo
router.post('/todos', function (req, res) {
  _index2.default.Todo.create({
    title: req.body.title,
    UserId: req.body.user_id
  }).then(function (todo) {
    res.json(todo);
  });
});

// update single todo
router.put('/todo/:id', function (req, res) {
  _index2.default.Todo.find({
    where: {
      id: req.params.id
    }
  }).then(function (todo) {
    if (todo) {
      todo.updateAttributes({
        title: req.body.title,
        complete: req.body.complete
      }).then(function (todo) {
        res.send(todo);
      });
    }
  });
});

// delete a single todo
router.delete('/todo/:id', function (req, res) {
  _index2.default.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (todo) {
    res.json(todo);
  });
});

module.exports = router;