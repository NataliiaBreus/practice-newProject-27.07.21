'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Superpower.init({
    superpower: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Superpower',
    tableName: 'superpower',
    underscored: true,
  });
  return Superpower;
};