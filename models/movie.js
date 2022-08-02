'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.Genre, {
        as: 'genre',
        foreignKey: 'id',
        targetKey: 'genreId'
      });
      Movie.belongsToMany(models.Character, {
        through: "CharacterMovie"
      })
    }
  }
  Movie.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Movie',
    timestamps: true,
    paranoid: true
  });
  return Movie
};