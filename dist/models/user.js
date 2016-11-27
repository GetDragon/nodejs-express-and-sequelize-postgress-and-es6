'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(models) {
        User.hasMany(models.Todo);
      }
    }
  });
  return User;
};