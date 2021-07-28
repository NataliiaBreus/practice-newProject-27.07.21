'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate (models) {
      Image.belongsToMany(models.Superhero, {
        through: 'superheroes_to_superpowers',
        foreignKey: 'superheroId',
      });
    }
    
  };
  Image.init({
    heroId: {
      allowNull: false,
      field: "hero_id",
      type: Sequelize.INTEGER,
      references: {
        model: 'superhero',
        key: 'id'

      }
    },
    imagePath: {
      field: "image_path",
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Image',
    tableName: 'image',
    underscored: true,
  });
  return Image;
};