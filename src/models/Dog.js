const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
      },
      weight: {
        type: DataTypes.JSON,
        allowNull: false
      },
      height: {
        type: DataTypes.JSON,
        allowNull: false
      },
      life_span:{
      type: DataTypes.INTEGER,
      allowNull: false
      },
      temperament: {
        type: DataTypes.STRING,
        allowNull: false
      }  
  },{
    timestamps: false, 
});
};
