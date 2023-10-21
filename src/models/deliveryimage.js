"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DeliveryImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DeliveryImage.belongsTo(models.User, { foreignKey: "userId" });
      DeliveryImage.belongsTo(models.Request, {
        foreignKey: "RequestId",
      });
    }
  }
  DeliveryImage.init(
    {
      requestId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DeliveryImage",
      timestamps: true,
      updatedAt: false,
    }
  );
  return DeliveryImage;
};
