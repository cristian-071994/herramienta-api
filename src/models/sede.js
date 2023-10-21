"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sede extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sede.hasMany(models.User, { foreignKey: "sedeId" });
    }
  }
  Sede.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Sede",
      timestamps: true,
      updatedAt: false,
    }
  );
  return Sede;
};
