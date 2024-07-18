const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Сomment extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.Tea, { foreignKey: "teaId" });
    }
  }
  Сomment.init(
    {
      text: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      teaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Сomment",
    }
  );
  return Сomment;
};
