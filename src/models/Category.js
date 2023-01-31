'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', 
  {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    createdAt: DataTypes.Date,
    updatedAt: DataTypes.Date
  },
  {
    tableName: 'categories',
    underscored: false,
    
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostsCategories, {
      foreignKey: 'categoryId', as: 'posts_categories'
    });
  };

  return Category;
};