'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coffee.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    img: DataTypes.STRING,
    like: DataTypes.INTEGER,
    coffeeType: DataTypes.STRING,
    roasting: DataTypes.STRING,
    country: DataTypes.STRING,
    info: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Coffee',
  });
  return Coffee;
};