'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Tea, { foreignKey: 'teaId' });
    }
  }
  Review.init({
    text: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    teaId: DataTypes.INTEGER,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};