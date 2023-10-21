"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RequestElement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RequestElement.belongsTo(models.User, { foreignKey: "userId" });
      RequestElement.belongsTo(models.Request, {
        foreignKey: "requestId",
      });
    }
  }
  RequestElement.init(
    {
      requestId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      elementName: DataTypes.STRING,
      changeAmount: DataTypes.STRING,
      observations: DataTypes.TEXT,
      elementImage: DataTypes.STRING,
      state: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "RequestElement",
    }
  );
  return RequestElement;
};
