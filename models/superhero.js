'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Superheroes.init({
    nickname: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    realName: {
      field: "real_name",
      allowNull: false,
      type: DataTypes.STRING,

      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    originDescription: {
      field: "origin_description",
      type: DataTypes.TEXT
    },
    catchPhrase: {
      field: "catch_phrase",
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Superhero',
    tableName: 'superhero',
    underscored: true,
  });
  return Superhero;
};