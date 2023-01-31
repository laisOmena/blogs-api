'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', 
  {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
    createdAt: DataTypes.Date,
    updatedAt: DataTypes.Date
  },
  {
    tableName: 'posts_categories',
    underscored: true,
    
  });

  PostsCategory.associate = (models) => {
    PostsCategory.belongsToMany(models.BlogPost, {
      foreignKey: 'postId', as: 'blog_posts'
    });
  };

  PostsCategory.associate = (models) => {
    PostsCategory.belongsToMany(models.Category, {
      foreignKey: 'categoryId', as: 'categories'
    });
  };

  return PostsCategory;
};