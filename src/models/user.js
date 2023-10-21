"use strict";

const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Sede, { foreignKey: "sedeId" });
      User.hasMany(models.Request, { foreignKey: "userId" });
      User.hasMany(models.DeliveryImage, { foreignKey: "userId" });
      User.hasMany(models.RequestElement, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      names: DataTypes.STRING,
      surnames: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      sedeId: DataTypes.INTEGER,
      typeUser: DataTypes.ENUM("admin", "user"),
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: async (user, options) => {
          const hashed = await bcrypt.hash(user.password, 10);
          user.password = hashed;
        },
      },
    }
  );
  return User;
};
