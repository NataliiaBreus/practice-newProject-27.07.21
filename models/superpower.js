'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
      static associate (models) {
        
        Superpower.belongsToMany(models.Superhero, {
          through: 'superheroes_to_superpowers',
          foreignKey: 'superpowerId',
        });
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