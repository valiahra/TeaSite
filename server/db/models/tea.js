const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    static associate(models) {
       console.log(models)
       
       this.hasMany(models.Review, { foreignKey: "teaId" });

    }
  }
  Tea.init(
    {
      title: DataTypes.STRING,
      placeOrigin: DataTypes.STRING,
      img: DataTypes.STRING,
      description: DataTypes.TEXT,
      corX: DataTypes.DOUBLE,
      corY: DataTypes.DOUBLE,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tea",
    },
  );
  return Tea;
};
