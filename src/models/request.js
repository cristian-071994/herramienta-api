"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Request.hasMany(models.RequestElement, {
        foreignKey: "requestId",
      });
      Request.hasMany(models.DeliveryImage, { foreignKey: "requestId" });
      Request.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Request.init(
    {
      userId: DataTypes.INTEGER,
      targetBrigade: DataTypes.STRING,
      brigadeLeader: DataTypes.STRING,
      state: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Request",
    }
  );
  return Request;
};
