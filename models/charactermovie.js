'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CharacterMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CharacterMovie.hasMany(models.Movie, {
        as: 'movie',
        foreignKey: 'id',
        targetKey: 'movieId'
      });
      CharacterMovie.hasMany(models.Character, {
        as: 'character',
        foreignKey: 'id',
        targetKey: 'characterId'
      });
    }
  }
  CharacterMovie.init({
    characterId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'CharacterMovie',
    timestamps: true,
    paranoid: true
  });
  return CharacterMovie;
};