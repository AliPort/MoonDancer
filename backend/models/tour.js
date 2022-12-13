'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
  
    static associate({ User, Guests }) {
      Tour.belongsTo(User, { as: 'BookedBy', foreignKey: 'user_id' })
      Tour.belongsTo(Guests, { as: 'PassengerOn', foreignKey: 'guest_id' })
    }

  };
  Tour.init({
    tourId: {
      type:  DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    tourName: DataTypes.STRING,
    date: DataTypes.DATE,
    timeOfDay: DataTypes.TIME
    }, 
    {
    sequelize,
    underscored: true,
    modelName: 'Tour',
  });
  return Tour;

};